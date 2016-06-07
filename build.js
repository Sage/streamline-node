var fs = require('fs');
var fsp = require('path');

var input = fsp.join(__dirname, 'typings/globals/node/index.d.ts');
var output = fsp.join(__dirname, 'streamline-node.d.ts');

var openRe = /\{\s*$/;
var closeRe = /^\s*\}/;
var importRe = /^\s*import /;

var result = fs.readFileSync(input, 'utf8').split('\n').reduce(function(lines, line) {
    var m;
    if (m = /^\s*(?:\w|\().*?(\w+)\s*\??\s*:\s*(\(err.*\)\s*=>\s*void)\s*\)\s*:\s*([^;\)]+)/.exec(line)) {
        //console.error(m);
        var pair = m[2].split(/\)\s*=>\s*/);
        var newTypes = pair[0].split(',').map(arg => arg.split(/:\s*/)[1]);
        var oldType = pair[1];
        if (oldType !== 'void' && oldType !== newTypes[0]) {
            console.error("type mismatch: " + line + '\n' + oldTypes + '\n' + newTypes);
        } else {
            line = line.replace(m[1], '_');
            lines.push(line.replace(m[2], '_').replace(m[3], newTypes[1] || 'void'));
            if (newTypes.length > 2) {
                lines.push(line.replace(m[2], '[_]').replace(m[3], '[' + newTypes.slice(1).join(', ') + ']'));
            }
        }
    } else if (importRe.test(line)) {
        lines.push(line);
    } else if (openRe.test(line)) {
        // keep imports but replace class ... implements ... by interface ...
        line = line.replace(/\bclass (.*) implements (.*) \{/, "interface $1 {");
        lines.push(line);
        // insert streamline-runtime import
        if (/declare\s*module/.test(line)) {
            lines.push(/^ */.exec(line)[0] + '    import { _ } from "streamline-runtime";');
        }
    } else if (closeRe.test(line)) {
        // backtrack on imports
        var i = lines.length;
        while (--i >= 0 && importRe.test(lines[i])) void 0;
        // if empty or only imports, discard it.
        if (openRe.test(lines[i])) {
            lines.splice(i, lines.length - i);
        } else {
            lines.push(line);
        }
    }
    return lines;
}, [
    '/// <reference path="./typings/index.d.ts" />',
    '/// <reference path="./typings/tsd.d.ts" />'
]).join('\n');

fs.writeFileSync(output, result, 'utf8');
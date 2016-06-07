/// <reference path="./streamline-node.d.ts" />
import { _ } from "streamline-runtime";
import * as cp from "child_process";

function f(_: _) {
    var std = cp.execFile("", "", _);
    std.toLowerCase();
    var [stdin, stdout] = cp.execFile("", "", [_]);
    stdin.toLowerCase();
    stdout.toLowerCase();
}

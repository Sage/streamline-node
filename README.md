# Streamline.js type definitions for node.js API

Streamline needs _global-level_ type definitions and 
the `typings` tool only handles _module-level_ type definitions. 
So I recommend using `tsdm` instead. 

``` sh
# Install tsdm globally (if not already done)
$ npm install tsdm --global
# Install streamline-runtime and streamline-node 
# and add them to your package.json.
$ npm install --save streamline-runtime streamline-node
# Link the definitions
$ tsdm rewire
# Enjoy :-)
```

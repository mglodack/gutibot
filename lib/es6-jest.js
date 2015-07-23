"use strict";

var es6tr = require("es6-transpiler");

module.exports = {
  process: function (src, filename) {
    if (filename.indexOf("node_modules") === -1) {
      return es6tr.run({src: src}).src;
    }

    return src;
  },
};

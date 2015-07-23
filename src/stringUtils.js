"use strict";

module.exports = {
  splitWord(word, suffix) {
    var indexOfSuffix = word.lastIndexOf(suffix);
    var prefix = word.slice(0, indexOfSuffix);

    return [prefix, suffix];
  },
};

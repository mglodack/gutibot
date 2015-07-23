"use strict";

module.exports = {
  splitWord(word, suffix) {
    const indexOfSuffix = word.lastIndexOf(suffix);
    const prefix = word.slice(0, indexOfSuffix);

    return [prefix, suffix];
  },
};

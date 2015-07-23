(function() {
  "use strict";

  function splitWord(word, suffix) {
    var indexOfSuffix = word.lastIndexOf(suffix);
    var prefix = word.slice(0, indexOfSuffix);

    return [prefix, suffix];
  }

  module.exports = {
    splitWord: splitWord,
  };
})();

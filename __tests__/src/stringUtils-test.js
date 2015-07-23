/*eslint-disable */
jest.dontMock("../../src/stringUtils");

describe("splitWord", function() {
  splitWord = require("../../src/stringUtils").splitWord;

  it("splits the word by 'er'", function() {
    expect(splitWord("boer", "er")).toEqual(["bo", "er"])
  });

  it("is always picks the last 'er'", function() {
    expect(splitWord("blunderer", "er")).toEqual(["blunder", "er"])
  });
});

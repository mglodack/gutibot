"use strict";

const srcPath = "../../src/stringUtils.js";
jest.dontMock(srcPath);

describe("splitWord", () => {
  const splitWord = require(srcPath).splitWord;

  it("splits the word by 'er'", () => {
    expect(splitWord("boer", "er")).toEqual(["bo", "er"]);
  });

  it("is always picks the last 'er'", () => {
    expect(splitWord("blunderer", "er")).toEqual(["blunder", "er"]);
  });
});

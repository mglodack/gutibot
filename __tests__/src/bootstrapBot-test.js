"use strict";

const srcPath = "../../src/bootstrapBot";

jest.dontMock(srcPath);

describe("isMatch", () => {
  it("checks for any first character match with b", () => {
    const isMatch = require(srcPath).isMatch;
    const sentence = "I read a book!";
    const actual = isMatch(sentence);

    expect(actual).toEqual(true);
  });
});

"use strict";

const srcPath = "../src/barelyKnowerBot";

jest.dontMock(srcPath);

describe("getMatches", function() {
  it("finds matches", function() {
    const getMatches = require(srcPath).getMatches;
    const expectedResult = ["boer"];

    expect(getMatches("boer")).toEqual(expectedResult);
  });
});

// TODO: add more...

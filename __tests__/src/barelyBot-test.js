"use strict";

const srcPath = "../../src/barelyBot";

jest.dontMock(srcPath);

describe("getMatches", () => {
  it("finds matches", () => {
    const getMatches = require(srcPath).getMatches;
    const erWord = "cheeseburger";
    const expected = [erWord];
    const actual = getMatches(erWord);

    expect(actual).toEqual(expected);
  });
});

// TODO: add more...

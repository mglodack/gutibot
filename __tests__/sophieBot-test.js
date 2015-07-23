"use strict";

const srcPath = "../src/sophieBot.js";

jest.dontMock(srcPath);

describe("containsChoice", () => {
  it("findes matches", () => {
    const containsChoice = require(srcPath).containsChoice;
    const expectedResult = true;

    expect(containsChoice("the choice is yours")).toEqual(expectedResult);
  });
});

// TODO: add more...

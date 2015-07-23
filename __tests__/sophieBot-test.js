/*eslint-disable*/
"use strict";

let srcPath = "../src/sophieBot.js";

jest.dontMock(srcPath);

describe("containsChoice", () => {
  it("findes matches", () => {
    let containsChoice = require(srcPath).containsChoice
    let expectedResult = true

    expect(containsChoice("the choice is yours")).toEqual(expectedResult);
  });
});

// TODO: add more...

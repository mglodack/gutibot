"use strict";

const srcPath = "../src/sophieBot.js";
jest.dontMock(srcPath);

describe("containsChoice", () => {
  const containsChoice = require(srcPath).containsChoice;

  it("finds matches", () => {
    expect(containsChoice("the choice is yours")).toBeTruthy();
  });

  it("matches plural choices", () => {
    expect(containsChoice("poor choices can ruin your life")).toBeTruthy();
  });

});

// TODO: add more...

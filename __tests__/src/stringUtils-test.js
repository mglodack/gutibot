"use strict";

const srcPath = "../../src/stringUtils.js";
jest.dontMock(srcPath);

describe('stringUtils', () => {
  describe("splitWord", () => {
    const splitWord = require(srcPath).splitWord;

    it("splits the word by 'er'", () => {
      expect(splitWord("boer", "er")).toEqual(["bo", "er"]);
    });

    it("is always picks the last 'er'", () => {
      expect(splitWord("blunderer", "er")).toEqual(["blunder", "er"]);
    });

    it('does not explode given empty strings', () => {
      expect(splitWord('', '')).toEqual(['', '']);
    });
  });

  describe('capitalizeFirstCharacter', () => {
    const capFirst = require(srcPath).capitalizeFirstCharacter;

    it('capitalizes the first character of a string', () => {
      expect(capFirst('hello')).toEqual('Hello');
    });

    it('does not explode given an empty string', () => {
      expect(capFirst('')).toEqual('');
    });

    it('returns the empty string given null', () => {
      expect(capFirst(null)).toEqual('');
    });

    it('returns the empty string given undefined', () => {
      expect(capFirst(undefined)).toEqual('');
    });
  });
});

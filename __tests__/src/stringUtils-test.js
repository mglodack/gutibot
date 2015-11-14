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

    it('returns the empty string given an empty string', () => {
      expect(capFirst('')).toEqual('');
    });

    it('returns the empty string given null', () => {
      expect(capFirst(null)).toEqual('');
    });

    it('returns the empty string given undefined', () => {
      expect(capFirst(undefined)).toEqual('');
    });
  });

  describe('linkifySlackUsername', () => {
    const linkify = require(srcPath).linkifySlackUsername;

    it('formats usernames for Slack linkification', () => {
      const username = 'somePerson';
      const expected = '<@somePerson|somePerson>';
      const actual = linkify(username);

      expect(actual).toEqual(expected);
    });

    it('simply prepends "@" for usernames with periods', () => {
      const username = 'some.person';
      const expected = '@some.person';
      const actual = linkify(username);

      expect(actual).toEqual(expected);
    });
  });
});

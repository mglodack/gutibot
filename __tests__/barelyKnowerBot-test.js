/*eslint-disable */
var srcPath = "../src/barelyKnowerBot";

jest.dontMock(srcPath);

describe("getMatches", function() {
  it("finds matches", function() {
    getMatches = require(srcPath).getMatches

    expectedResult = ["boer"]

    expect(getMatches("boer")).toEqual(expectedResult);
  });
});

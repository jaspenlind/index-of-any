import { indexOfAny } from "../src";

const noMatch = { index: -1, match: null };

describe("indexOfAny", () => {
  describe("strings", () => {
    it("can handle empty string", () => {
      const [index, match] = indexOfAny("", "searchString");
      expect(index).toBe(noMatch.index);
      expect(match).toBe(noMatch.match);
    });

    it("can handle empty search string", () => {
      const [index, match] = indexOfAny("value", "");
      expect(index).toBe(noMatch.index);
      expect(match).toBe(noMatch.match);
    });

    it("can handle empty search string array", () => {
      const [index, match] = indexOfAny("value", ...[]);
      expect(index).toBe(noMatch.index);
      expect(match).toBe(noMatch.match);
    });

    it("should return matched search string", () => {
      const [, match] = indexOfAny("valuewithmatch", "match", "notmatched");

      expect(match).toBe("match");
    });

    it("should return index matching search string", () => {
      const value = "valuewithmatch";
      const match = "match";
      const indexOfMatch = value.indexOf(match);
      const [index] = indexOfAny(value, match);

      expect(index).toBe(indexOfMatch);
    });

    it("should return first matching search string", () => {
      const value = "-key>=5";
      const searchStrings = [">=", "=", "=>"];

      const [, matchingString] = indexOfAny(value, ...searchStrings);

      expect(matchingString).toBe(">=");
    });

    it("should be null when not found", () => {
      const [, match] = indexOfAny("value", "other");
      expect(match).toBe(null);
    });

    it("should have negative index when not found", () => {
      const missing = -1;
      const [index] = indexOfAny("value", "other");

      expect(index).toBe(missing);
    });
  });
  describe("arrays", () => {
    it("can handle empty array", () => {
      const [index, match] = indexOfAny([], "searchString");
      expect(index).toBe(noMatch.index);
      expect(match).toBe(noMatch.match);
    });

    it("can handle empty search string", () => {
      const [index, match] = indexOfAny(["value"], "");
      expect(index).toBe(noMatch.index);
      expect(match).toBe(noMatch.match);
    });

    it("can handle empty search string array", () => {
      const [index, match] = indexOfAny(["value"], ...[]);
      expect(index).toBe(noMatch.index);
      expect(match).toBe(noMatch.match);
    });

    it("should return matched search string", () => {
      const [, match] = indexOfAny(["match", "other"], "match");

      expect(match).toBe("match");
    });

    it("should return index matching search string", () => {
      const [index] = indexOfAny(["other", "match"], "match");

      expect(index).toBe(1);
    });

    it("should be null when not found", () => {
      const [, match] = indexOfAny(["value"], "other");
      expect(match).toBe(null);
    });

    it("should have negative index when not found", () => {
      const missing = -1;
      const [index] = indexOfAny(["value"], "other");

      expect(index).toBe(missing);
    });
  });
});

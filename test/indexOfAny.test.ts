import { indexOfAny } from "../src";

describe("indexOfAny", () => {
  describe("strings", () => {
    it("can handle empty string", () => {
      indexOfAny("", "searchString");
    });

    it("can handle empty search string", () => {
      indexOfAny("value", "");
    });

    it("can handle empty search string array", () => {
      indexOfAny("value", ...[]);
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
      indexOfAny([], "searchString");
    });

    it("can handle empty search string", () => {
      indexOfAny(["value"], "");
    });

    it("can handle empty search string array", () => {
      indexOfAny(["value"], ...[]);
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

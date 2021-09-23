import { indexOfAll } from "../src";

describe("indexOfAll", () => {
  it("should return all matching results for a string", () => {
    const searchStrings = [">", ">=", "==>", "test"];

    const result = indexOfAll("some>value>=value2==>value3", ...searchStrings).map((x) => x.matchingString);

    expect(result).toHaveLength(5);
  });

  it.todo("should return all matching results for an array");
});

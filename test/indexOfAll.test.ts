import { indexOfAll } from "../src";

describe("indexOfAll", () => {
  it("should return all matching results", () => {
    const searchStrings = [">", ">=", "==>", "test"];

    const result = indexOfAll("some>value>=value2==>value3", ...searchStrings);

    test.todo("todo");
  });
});

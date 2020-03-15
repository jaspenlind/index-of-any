import { IndexOfAll, MatchedIndexResult } from "../types";

const missing = -1;

const getAllIndexPositions = (value: string, searchString: string, position?: number): number[] => {
  const index = value.indexOf(searchString, position);

  if (index !== missing) {
    return [index].concat(getAllIndexPositions(value, searchString, index + 1));
  }

  return [];
};

export const indexOfAll: IndexOfAll = (value: string | string[], ...searchStrings: string[]): MatchedIndexResult[] => {
  const result: MatchedIndexResult[] = [];
  for (const matchingString of searchStrings) {
    if (typeof value === "string") {
      getAllIndexPositions(value, matchingString).forEach(index => {
        result.push({ index, matchingString });
      });
    } else {
      const index = value.indexOf(matchingString);

      if (index !== missing) {
        result.push({ index, matchingString });
      }
    }
  }

  return result;
};

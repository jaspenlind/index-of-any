import { IndexOfAny } from "../types";

const missing: [number, string | null] = [-1, null];

export const indexOfAny: IndexOfAny = (
  value: string | string[],
  ...searchStrings: string[]
): [number, string | null] => {
  if (!value) return missing;

  for (const searchString of searchStrings.filter((x) => x)) {
    const index = value.indexOf(searchString);
    if (index >= 0) {
      return [index, searchString];
    }
  }

  return missing;
};

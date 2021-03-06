import { MatchedIndexResult } from ".";

export interface IndexOfAll {
  /**
   * Returns the `index` positions of a `string` of the all matching `searchStrings`
   *
   * @param value - The string to find an index for
   * @param searchStrings - A list of strings to search for
   * @return The `index` positions and the matched `searchStrings`
   */
  (value: string, ...searchStrings: string[]): MatchedIndexResult[];
  /**
   * Returns the `index` position in an array of `strings` for the first matched `searchString`
   *
   * @param value - The array to find an index for
   * @param searchStrings - A list of strings to search for
   * @return The `index` positions and the matched `searchStrings`
   */
  (value: string[], ...searchStrings: string[]): MatchedIndexResult[];
}

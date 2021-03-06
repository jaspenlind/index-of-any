/**
 * Test
 */
export interface IndexOfAny {
  /**
   * Returns the `index` position of a `string` of the first matched `searchString`
   *
   * @param value - The string to find an index for
   * @param searchStrings - A list of strings to search for
   * @return The `index` position and the first matched `searchString`
   */
  (value: string, ...searchStrings: string[]): [number, string | null];
  /**
   * Returns the `index` position in an array of `strings` for the first matched `searchString`
   *
   * @param value - The array to find an index for
   * @param searchStrings - A list of strings to search for
   * @return The `index` position and the first matched `searchString`
   */
  (value: string[], ...searchStrings: string[]): [number, string | null];
}

/**
 * 1) Create a pattern
 * Assume we have a variable which should match some pattern. For instance we have
 * a string which should contain "x,y; x,y; x,y; ..."
 *
 * There is no a regular expression to express this infinity pattern, however we can accomplish it with unions:
 */

type Coordinates = `${number},${number};`;

type MAXIMUM_ALLOWED_BOUNDARY = 10;

/**
 * Obtains last element in the tuple
 */
type Last<T extends string[]> = T extends [...infer _, infer Last]
  ? Last
  : never;

/**
 * Concats Coordinates to the last element in the tuple
 */
type ConcatPrevious<T extends any[]> = Last<T> extends string
  ? `${Last<T>}${Coordinates}`
  : never;

/**
 * Creates required union
 */
type Repeat<
  N extends number,
  Result extends Array<unknown> = [Coordinates]
> = Result["length"] extends N
  ? Result
  : Repeat<N, [...Result, ConcatPrevious<Result>]>;

type MyLocation = Repeat<MAXIMUM_ALLOWED_BOUNDARY>[number];

const myLocation1: MyLocation = "02,56;67,68;"; // ok
const myLocation2: MyLocation = "45,56;67,68;1,2;3,4;5,6;7,8;9,10;"; // ok
const myLocation3: MyLocation = "45,56;67,68;1,2;3,4;5,6;7,8;9,10,"; // expected error

export {};

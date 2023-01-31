type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result["length"] extends N
  ? Result
  : ComputeRange<N, [...Result, Result["length"]]>;

type Add<A extends number, B extends number> = [
  ...ComputeRange<A>,
  ...ComputeRange<B>
]["length"];

type IsGreater<A extends number, B extends number> = IsLiteralNumber<
  [...ComputeRange<B>][Last<[...ComputeRange<A>]>]
> extends true
  ? false
  : true;

type Last<T extends any[]> = T extends [...infer _, infer Last]
  ? Last extends number
    ? Last
    : never
  : never;

type RemoveLast<T extends any[]> = T extends [...infer Rest, infer _]
  ? Rest
  : never;

type IsLiteralNumber<N> = N extends number
  ? number extends N
    ? false
    : true
  : false;

type AddIteration<
  Min extends number,
  Max extends number,
  ScaleBy extends number,
  Result extends Array<unknown> = [Min]
> = IsGreater<Last<Result>, Max> extends true
  ? RemoveLast<Result>
  : AddIteration<Min, Max, ScaleBy, [...Result, Add<Last<Result>, ScaleBy>]>;

// [5, 13, 21, 29, 37]
type Result = AddIteration<5, 40, 8>;
export {};
// article https://catchts.com/range-numbers#part_2
// answer https://stackoverflow.com/questions/75108082/is-it-possible-to-generate-a-union-type-of-numbers-without-explicitly-stating-ea/75109244#75109244

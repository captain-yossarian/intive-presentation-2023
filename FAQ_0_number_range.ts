/**
 * Create a union of integer range
 */
type MAXIMUM_ALLOWED_BOUNDARY = 999;

/**
 * This patter is very powerful, it can be used an various cases
 */
type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result["length"] extends N
  ? Result
  : ComputeRange<N, [...Result, Result["length"]]>;

// 0 , 1, 2 ... 998
type NumberRange = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number];

/**
 *
 * JS represenations for better understandig
 */
const ComputeRange = (N: number, Result: number[] = []): number[] => {
  if (Result.length === N) {
    return Result;
  }
  return ComputeRange(N, [...Result, Result.length]);
};

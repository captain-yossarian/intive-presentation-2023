/**
 * Making a union of all allowed states/values is a powerfull techique and might be used to express
 * other data structures.
 * Imagine you need to create an array which should always contain Color.white and Color.black enums
 */
enum Color {
  red,
  green,
  yellow,
  blue,
  black,
  white,
}

type TupleUnion<U extends string | number, R extends any[] = []> = {
  [S in U]: Exclude<U, S> extends never
    ? S extends Color.black | Color.white
      ? [...R, S]
      : [...R, S?]
    : TupleUnion<
        Exclude<U, S>,
        S extends Color.black | Color.white ? [...R, S] : [...R, S?]
      >;
}[U];

type Ok = TupleUnion<Color>;

export const Correct0: Ok = [Color.red, Color.yellow, Color.black, Color.white]; // ok
export const Correct1: Ok = [Color.red, Color.white, Color.yellow, Color.black]; // ok
export const Correct2: Ok = [Color.red, Color.white, Color.black, Color.yellow]; // ok
export const Correct3: Ok = [Color.black, Color.white, Color.red, Color.yellow]; // ok

export const Wrong1: Ok = [Color.red, Color.yellow]; // error

export const Wrong2: Ok = [Color.red, Color.green, Color.black]; // error

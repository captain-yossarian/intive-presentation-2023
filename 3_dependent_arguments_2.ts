const obj = {
  a: "a",
  b: 42,
  c: "c",
};

type Values<T> = T[keyof T];

type FilterPropertyBy<Obj, Type> = Values<{
  [Prop in keyof Obj]: Obj[Prop] extends Type ? Prop : never;
}>;

type Test = FilterPropertyBy<typeof obj, number>;

const string = <
  Obj extends Record<PropertyKey, unknown>,
  Key extends FilterPropertyBy<Obj, string>
>(
  obj: Obj & Record<Key, string>,
  key: Key
) => {
  //charAt is a string prototype method
  const result = obj[key].charAt; // ok
};

const result = string(obj, "a");

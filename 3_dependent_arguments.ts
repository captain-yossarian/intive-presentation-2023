// https://catchts.com/useful-patterns#dependent_arguments
const obj = {
  a: "a",
  b: 42,
  c: "c",
};
type Data = typeof obj;
type Values<T> = T[keyof T];

{
  type Filter_1<Obj> = {
    [Prop in keyof Obj]: Prop;
  };

  type Result = Filter_1<Data>;
}

{
  type Filter_2<Obj> = {
    [Prop in keyof Obj]: Obj[Prop] extends string ? Prop : never;
  };

  type Result = Filter_2<Data>;
}

{
  type Filter_3<Obj> = Values<{
    [Prop in keyof Obj]: Obj[Prop] extends string ? Prop : never;
  }>;
  // in fact it is a | c | never, but never is always removed from union
  // see here https://stackoverflow.com/questions/64230626/why-is-the-type-never-meaningless-in-union-types
  type Result = Filter_3<Data>;
}

// Second argument should be a property name which corresponds to string
// @ts-ignore
stringProperty(obj, "a"); // ok
// @ts-ignore
stringProperty(obj, "b"); // expected error

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

const result = string(obj, "c");

// https://catchts.com/useful-patterns#dependent_arguments
const obj = {
  a: "string",
  b: 42,
  c: "hello",
} as const;

// Second argument should be a property name which corresponds to string
// @ts-ignore
stringProperty(obj, "a"); // ok
// @ts-ignore
stringProperty(obj, "b"); // expected error

type Data = typeof obj;

type Values<T> = T[keyof T];

// "string" | 42 | "hello"
type Test = Values<Data>;

type Filter_1<Obj> = {
  [Prop in keyof Obj]: Prop;
};

// type Result_1 = {
//   readonly a: "a";
//   readonly b: "b";
//   readonly c: "c";
// }
type Result_1 = Filter_1<Data>;

type Filter_2<Obj> = {
  [Prop in keyof Obj]: Obj[Prop] extends string ? Prop : never;
};

// type Result_2 = {
//   readonly a: "a";
//   readonly b: never;
//   readonly c: "c";
// }
type Result_2 = Filter_2<Data>;

type Filter_3<Obj> = Values<{
  [Prop in keyof Obj]: Obj[Prop] extends string ? Prop : never;
}>;

// in fact it is a | c | never, but never is always removed from union
// see here https://stackoverflow.com/questions/64230626/why-is-the-type-never-meaningless-in-union-types
type Result_3 = Filter_3<Data>; // a | c

export {};

type Primitives = string | number | symbol;

type Values<T> = T[keyof T];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

type KeysUnion<T, Cache extends PropertyKey = never> = T extends PropertyKey
  ? Cache
  : {
      [P in keyof T]: KeysUnion<T[P], Cache | P>;
    }[keyof T];

type Validate<
  Obj,
  Key extends PropertyKey,
  Cache extends Record<string, any> = never,
  Index extends number[] = [],
  Root extends string = ""
> = Obj extends Primitives
  ? Exclude<Cache, []>
  : {
      [Prop in keyof Obj]: Prop extends Key
        ? Validate<
            Obj[Prop],
            Key,
            Record<Key, `${Root}-${Prop & string}-${Index["length"]}`>,
            [...Index, Index["length"]],
            Root extends "" ? Prop : Root
          >
        : Validate<
            Obj[Prop],
            Key,
            Cache,
            [...Index, Index["length"]],
            Root extends "" ? Prop : Root
          >;
    }[keyof Obj];

type Structure = {
  foo: {
    three: "hi";
    bar: {
      one: "oh";
      bill: {
        four: "uh"; // duplicated
      };
    };
  };
  bar: {
    two: "hiya";
    foobar: {
      four: "hey"; // duplicated
    };
  };
};

type Check<Obj> = {
  [Prop in KeysUnion<Obj>]: IsUnion<Validate<Obj, Prop>> extends true
    ? "many"
    : "one";
};

type Duplicates = Check<Structure>;

export {};

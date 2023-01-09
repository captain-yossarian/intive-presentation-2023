import React, { createContext, ProviderProps } from "react";

function contextFunction<T>(context: React.Context<T>): void {}

type Wrapper<List extends unknown[]> = {
  [Prop in keyof List]: React.Context<List[Prop]>;
};

function mapper<Obj, List extends Obj[]>(
  ...contexts: [...Wrapper<[...List]>]
): void {
  contexts.forEach((context) => contextFunction(context));
}

const first = createContext({ x: 42, y: "hello" });
const second = createContext({ user: { name: "John" } });
const third = createContext({ data: [1, 2, 3] });

function example() {
  // here I used only one type of context, but imagine many different ones
  mapper(first); // ok
  mapper(first, second, third); // ok
}

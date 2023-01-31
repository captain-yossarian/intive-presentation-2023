import React from "react";

// #2 Inference prioritization
// stolen from here https://stackoverflow.com/questions/74093078/how-do-i-create-a-literal-type-for-react-component-parameters#74093982
interface SelectProps<Value extends string> {
  value: Value & {}; // <----- TRICK !
  options: Value[];
}

const Select = <Value extends string>(props: SelectProps<Value>) => null;

const ok = <Select value="red" options={["red", "yellow"]} />;
const error = <Select value="green" options={["red", "yellow"]} />;

// ANother example here https://stackoverflow.com/questions/75233854/typescript-ensure-all-properties-use-the-same-tuple-type/75233976#75233976

//Using Value & - means "lower priority inference"

// #3 Non nullable, documented feature
// docs https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-8.html#improved-intersection-reduction-union-compatibility-and-narrowing

const nonNullable = <T,>(a: T & {}) => {};

nonNullable(null); // expected error
export {};

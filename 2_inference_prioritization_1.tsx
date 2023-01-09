import React from "react";

interface SelectProps<Values extends string[], Value extends Values[number]> {
  value: Value;
  options: [...Values];
}

const Select = <Values extends string[], Value extends Values[number]>(
  props: SelectProps<Values, Value>
) => null;

const ok = <Select value="red" options={["red", "yellow"]} />;
const error = <Select value="green" options={["red", "yellow"]} />;

export {};

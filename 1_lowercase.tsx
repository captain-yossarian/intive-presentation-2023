import React from "react";

// https://catchts.com/undocumented-features

// #1 lowercase

// stolen from here https://stackoverflow.com/questions/68963491/define-a-typescript-type-that-takes-a-lowercase-word#answer-73732194
let str: Lowercase<string>;
str = "abc"; // okay
str = "DEF"; // error in TS4.8+


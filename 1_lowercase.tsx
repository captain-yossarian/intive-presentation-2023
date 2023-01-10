// https://catchts.com/undocumented-features
// all examples are taken from real life examples on stackoverflow
// new version of TypeScript (which one)
// most interesting features of new TS, TOP 5
// add QA slide
// #1 lowercase

// stolen from here https://stackoverflow.com/questions/68963491/define-a-typescript-type-that-takes-a-lowercase-word#answer-73732194
let str: Lowercase<string>;
str = "abc";
str = "DEF";

const expectLowercase = (str: Lowercase<string>) => {};

expectLowercase("hello"); // ok

let userName: string = "John";

expectLowercase(userName); // error

expectLowercase("HeLLo"); // error

declare function inference1<const T>(data: T): T;

const test1 = inference1({ a: 1 });
//    ^?

const inference2 = <T,>(data: T) => data

const test2 = inference2({ a: 1 })

const inference3 = <Value extends number, T extends Record<string, Value>>(data: T) => data

const test3 = inference3({ a: 1 })

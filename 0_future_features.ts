"type Hack<T> = T & {}" // <------ before I start presentation, think about this type, it has 3 use cases :)
/**
 * TypeScript 5.0
 */
const inference1=<const T>(data: T)=>data

const test1 = inference1({ a: 1 });


/**
 * Before TS 5.0
 */
const inference2 = <T,>(data: T) => data

const test2 = inference2({ a: 1 })


/**
 * Before TS 5.0
 */
const inference3 = <Value extends number, T extends Record<string, Value>>(data: T) => data

const test3 = inference3({ a: 1 })


enum Chars {
    a, // 0
    b, // 1
    c // 2
}

const char = (value: Chars) => { }

// ok
char(Infinity)
char(NaN)
char(Number.EPSILON)
let x:number=42
char(x)

// error in TS 5.0, before 5.0 there was no errors
char(-10)
char(0.00000000001)
char(3)             

// More about safe enums you can find in my blog https://catchts.com/safe-enums
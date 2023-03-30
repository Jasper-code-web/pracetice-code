// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P]
// }

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}
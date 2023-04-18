// type MyOmit<T, K extends keyof T> = {
//     [P in keyof T as P extends K? never : P]: T[P]
// }
// type MyOmit<T, U> = Pick<T, {
//     [P in keyof T]: P extends U ? never : P
// }[keyof T]>


















type MyOmit<T, K> = any
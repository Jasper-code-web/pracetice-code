// 你的答案
type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

// 如果是两个条件类型 T1 extends U1 ? X1 : Y1 和 T2 extends U2 ? X2 : Y2 相关的话，那 T1 和 T2 相关、X1 和 X2 相关、Y1 和 Y2 相关，而 U1 和 U2 相等


type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? MyEqual<U, First> extends true ? true : Includes<Rest, U> : false
import type { Equal, Expect } from '@type-challenges/utils'

type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

// export type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] ?
// Equal<First, U> extends true ? true : Includes<Rest, U> : false

//知识点
//1.用递归实现遍历数组
//2.ts的模块规范
    //如果有export/import的话,那么就是模块
    //如果没有那就是全局，可以直接在别的模块引用

// export type Includes<T extends readonly any[], U> = 
// T extends [infer First, ... infer Rest] ?
// MyEqual<First, U> extends true ? true : Includes<Rest, U>
// : false










type Includes<T extends readonly any[], U> = any
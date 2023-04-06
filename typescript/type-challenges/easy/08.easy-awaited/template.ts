//有 then 方法的对象叫 PromiseLike
// Promise is an implementation of PromiseLike
// then<TResult1, TResult2>(onfulfilled?: function | undefined | null, onrejected?: 
// function | undefined | null)
// : PromiseLike<TResult1 | TResult2>


// type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer R> 
// ? Awaited<R> : T;


// type MyAwaited<T> = T extends object & {
//   then: (onfulfilled: infer F) => any
// } ? F extends (args: infer V) => any ? MyAwaited<V> : never : T

// type MyAwaited<T> = T extends object & {
//     then: (onfullfilled: infer F) => any
// } ? 
// F extends (args: infer V) => any ? MyAwaited<V> : F
// : T








type MyAwaited<T> = any
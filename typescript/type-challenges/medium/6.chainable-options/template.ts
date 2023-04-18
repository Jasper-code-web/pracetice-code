// type Chainable<T = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<Omit<T,K> & Record<K, V>>;
//   get(): T;
// };








// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }
// type MyParameter<T extends (...args: any[]) => any> = 
// T extends (...args: infer Params) => any ? Params : never








type MyParameter<T extends (...args: any[]) => any> = any
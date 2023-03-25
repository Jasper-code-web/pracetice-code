//Object 在原型链顶端支持所有类型
//声明的对象不能进行赋值操作
let a: Object = 1
let b: Object = []
let b1: Object = {a: 2}
b1.a = 1
let c: Object = Symbol('a')
console.log('c',c)


//obj 只能支持所有的引用类型、不能支持原始类型
let d: object = 1
let e: object = []
let g: object = {}
g.a = 1
let f: object = Symbol('a')
console.log('c',c)


// let x: {} = {a: 2}
// x.a = 1
// console.log('x',x)
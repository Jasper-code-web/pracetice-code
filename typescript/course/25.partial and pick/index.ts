type Person = {
    name: string,
    age: number,
    sex: boolean
}

//把所有类型变为可选
type p = Partial<Person>

//原理 底层实现
// type Par<T> = {
//     [P in keyof T]?: T[P]
// }


//过滤类型
type pi = Pick<Person, 'age'>

//原理 底层实现
// type PPP<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

type R = Readonly<Person>

// type Re<T> = {
//    readonly [R in keyof T]: T[R]
// }


type HD = Record<'name' | 'age', string | number>
//相当于
// type hd = {
//     name: string | number
//     age: string | number
// }

type RECORD<K extends string | number | symbol, V> = {
    [P in K]: V
}
//相当于
//keyof any === string | number | symbol
type RECORD1<K extends keyof any, V> = {
    [P in K]: V
}
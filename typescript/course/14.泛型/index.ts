//函数泛型
function fn1<T>(val1: T, val2: T): Array<T> {
    return [val1, val2]
}
fn1(1, 2)
fn1('a', 'b')

function add<T = number, K = number>(a: T, b: K): Array<T | K>{
    return [a, b]
}

//类型泛型
type A<T> = string | number | T
let a:A<boolean> = 'a'

//接口泛型
interface Data<T> {
    msg: T
}
let data: Data<string> = {
    msg: 'a'
}


//泛型应用：axios封装
// const axios = {
//     get<T>(url): Promise<T> {
//         return new Promise((resolve, reject) => {
//             const xhr: XMLHttpRequest = new XMLHttpRequest()
//             xhr.open('GET', url)
//             xhr.onreadystatechange = () => {
//                 if(xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 }
//             }
//             xhr.send(null)
//         })
//     }
// }

// interface Res {
//     message: string,
//     code: number
// }

// axios.get<Res>('').then(res => {
//     res.code
// })


//通过extends约束
function add1<T extends number>(a: T, b: T) {
    return a + b
}


interface Len {
    length: number
}
function fn<T extends Len>(a: T) {
    a.length
}

const obj = {
    name: 'jasper',
    sex: 1
}
console.log(typeof obj)
//keyof 获取对象、接口的所有key,变成联合类型
type key = keyof typeof obj
function ob<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

interface Data1{
    name: string,
    age: number,
    sex: boolean
}
type Options<T extends object> = {
    [Key in keyof T]: T[Key]
}
type j = Options<Data1>

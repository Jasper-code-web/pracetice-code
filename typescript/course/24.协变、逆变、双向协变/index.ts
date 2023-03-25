//如果子类型可以完全覆盖主类型就可以赋值
//协变  
//主类型
interface A{
    name: string,
    age: number,
}
//子类型
interface B{
    name: string,
    age: number,
    sex: boolean
}
let a:A = {
    name: 'a',
    age: 24
}
let b:B = {
    name: 'b',
    age: 24,
    sex: true
}
a = b

//逆变
let fna = (params: A) => {}
let fnb = (params: B) => {}

// fnb = fna

//双向协变
//strictFunctionTypes设置为false
fnb = fna
fna = fnb
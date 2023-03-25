type str = string
type sFn = () => string
type str1 = string | number
//定义类型别名的值
type value = boolean | 0 | '123'

type num = 1 extends number ? 1 : 0

//type继承
type B = number
type a = 'a' & B
let s:a = 1

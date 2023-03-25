//定义一个类型 如果是数组类型 就返回数组元素的类型 否则 返回传入的类型

// type TYPE<T> = T extends Array<any> ? T[number] : T
//等同于
// type TYPE<T> = T extends Array<infer U> ? U : T

// type A = TYPE<(string | number)[]>

// type B = TYPE<boolean>


//元组限制类型，非元组设置的类型返回Never
// type TYPE1<T> = T extends Array<infer U> ? U : never

// type arr1 = [string | number]

// type n = TYPE1<arr1>



//infer取值
// type Arr = ['a', 'b', 'c']

// type First<T extends any[]> = T extends [infer one, ...any[]]? one : []

// type a = First<Arr>


//infer递归
//翻转数组类型
type Arr = [1, 2, 3, 4]

type ReverseArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReverseArr<Rest>, First] : T 

type Arr1 = ReverseArr<Arr>
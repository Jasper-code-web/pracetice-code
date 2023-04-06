//实现pick
//keyof遍历T的所有key得到一个数组
//in循环数组
// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }
interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<T, K> = any
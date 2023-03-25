//1. 参数默认值 | 可选参数 | 返回值
// function add(a: number, b?: number, c = 3): number{
//     return a + c
// }
// console.log(add(1, 2))

//2. 函数定义this类型
//只能在函数的第一个参数定义this类型，传参时忽略第一个
// interface Obj {
//     arr: number[]
//     add: (this: Obj, num: number) => void
// }
// let obj: Obj = {
//     arr: [1, 2, 3],
//     add (this: Obj, num: number) {
//         this.arr.push(4)
//     }
// }
// obj.add(5)
// console.log('obj',obj)

//3. 函数重载
let user: number[] = [1, 2, 3]
function findNum(add: number[]): number[]
function findNum(id: number): number[]
function findNum(): number[]
function findNum(ids?: number | number[]): number[] {
    if(typeof ids === 'number') {
        return user.filter(v => v == ids)
    }else if(Array.isArray(ids)) {
        user.push(...ids)
        return user
    } else {
        return user
    }
}

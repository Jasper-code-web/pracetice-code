//联合类型
// let phone: number | string = '12232323'

//交叉类型
// interface Person {
//     name: string,
//     age: number
// }
// interface Man {
//     sex: boolean
// }
// const jasper = (p: Person & Man): void => {
//     console.log('p',p)
//     console.log(1)
// }
// jasper({
//     name: 'jasper',
//     age: 25,
//     sex: true
// })

//类型断言
let fn = function(num: number | string): void {
    console.log((num as string).length)
}
fn('1233')

interface A {
    run: string
}
interface B {
    build: string
}
let fn1 = (type: A | B): void => {
    console.log((<A>type).run)
}
fn1({
    run: '123'
})
// ts使用never类型来表示不应该存在的状态

//返回never的函数必须存在无法到达的终点
//因为必定抛出异常，所以error将不会有返回值
function myError(message: string): never {
    throw Error(message)
}
//死循环
function loop(): never{
    while(true) {

    }
}

//void: 只是没有返回值，但执行正常
//鼠标移上去的时候会发现 只有void和number, never在联合类型中会被直接移除
type A = void | number | never


//never应用场景
// type Model = 'small' | 'normal' | 'large'
// function selectModel(model: Model) {
//     switch(model) {
//         case 'small':
//             break;
//         case 'normal':
//             break
//         case 'large':
//             break
//         default:
//             const myError: never = value
//             return myError
//     }
// }
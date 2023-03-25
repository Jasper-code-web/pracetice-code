import {B} from './index'

// namespace A {
//     export const a = 2
// }
// console.log('A.a',A.a)

namespace A {
    export namespace B {
        export namespace C {
            export const D = 1
        }
    }
}

//通过import 关键字给命名空间重新命名
import abc = A.B.C.D

console.log(abc)

//如果命名空间重名,命名空间会合并
namespace A {
    export const p = 1
}

console.log('A',A)
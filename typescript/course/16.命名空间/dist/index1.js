"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// namespace A {
//     export const a = 2
// }
// console.log('A.a',A.a)
var A;
(function (A) {
    let B;
    (function (B) {
        let C;
        (function (C) {
            C.D = 1;
        })(C = B.C || (B.C = {}));
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
//通过import 关键字给命名空间重新命名
var abc = A.B.C.D;
console.log(abc);

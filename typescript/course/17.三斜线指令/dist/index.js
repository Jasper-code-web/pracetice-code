"use strict";
///<reference path="./index1.ts" /> 
///<reference path="./index2.ts" />
var A;
(function (A) {
    A.c = 666;
})(A || (A = {}));
console.log('A', A);

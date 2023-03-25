
const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1= {
   [symbol1]: '小满',
   [symbol2]: '二蛋',
   age: 19,
   sex: '女'
}

// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
// Object.getOwnPropertySymbols(obj1)
// console.log(Object.getOwnPropertySymbols(obj1))
// 2 es6 的 Reflect 拿到对象的所有属性

// Reflect.ownKeys(obj1)
// console.log(Reflect.ownKeys(obj1))


//生成器 Generator
function* gen() {
   //yield可以处理同步异步
   yield Promise.resolve('small')
   yield 'normal'
   yield 'large'
}
const model = gen()
// console.log('model.next()',model.next())
// console.log('model.next()',model.next())
// console.log('model.next()',model.next())
// console.log('model.next()',model.next())

//set、map
const mySet: Set<number> = new Set([1, 2, 3])
const myMap: Map<any, any> = new Map()
myMap.set('a', 1)
myMap.set('b', 2)
// console.log('mySet',mySet)
// console.log('myMap',myMap)

//迭代器
function iterEach(value: any) {
   let iter = value[Symbol.iterator]()
   let next = value[Symbol.iterator]().next()
   if(!next.done) {
      console.log(iter.next())
      next = iter.next()
   }
}
iterEach(mySet)

//迭代器语法糖 for...of  数组结构

//对象支持for...of
let obj = {
   max: 5,
   current: 0,
   [Symbol.iterator]() {
      return {
         max: this.max,
         current: this.current,
         next() {
            if(this.current < this.max) {
               return {value: this.current ++, done: false}
            } else {
               return {value: this.current, done: true}
            }
         }
      }
   }
}
for(let value of obj) {
   console.log('value',value)
}
let objArr = [...obj]
console.log('objArr',objArr)

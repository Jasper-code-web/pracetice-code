enum Types{
    Red,
    Green,
    Blue
}
const type: number = Types.Red
console.log('type',type) //0

//增长枚举: 给第一位赋值为1（默认从0开始递增）
enum Types1{
    Red = 1,
    Green,
    Blue
}


//异构枚举： 枚举可以混合字符串和数字成员
enum STypes {
    Red = 'red',
    Green = 1,
    Blue = 'blue'
}

//const 枚举
const Types2 {
    No = "no",
    Yes = 1
}
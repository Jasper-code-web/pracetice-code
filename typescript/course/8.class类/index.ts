//1. class的基本用法 继承 和 类型约束 implements
//2. class的修饰符 readonly private protected public
//3. super的原理
//4. 静态方法
//5. get set
//6. 抽象类

interface limitPerson{
    name: string
    age: number
}

class Person implements limitPerson {
    public name: string
    age: number
    protected firstName: string
    static a() {
        //静态方法的this只能拿到本身或其它static的值，不能拿到实例的方法、值
    }
    constructor(name: string, age: number, firstName: string) {
        this.name = name
        this.age = age
        this.firstName = firstName
    }

    run(){}
}

class Man extends Person{
    constructor() {
        super('jasper', 25, '沈') //父类的prototype.constructor.call()
        console.log(this.firstName)
    }
}
const man1 = new Person('王五', 18, '王')
const j = new Man()
console.log('man1',man1)
console.log('j',j)


//基类 抽象类
//用abstract修饰符定义的类
//abstract定义的方法只能描述不能实现
//抽象类无法被实例化
//抽象类的子类必须实现抽象类的抽象方法
abstract class Vue {
    name: string | undefined
    constructor(name?: string) {
        this.name = name
    }
    getName() {
        return this.name
    }
    abstract init(name: string): void
}

class React extends Vue{
    constructor() {
        super()
    }
    init(name: string): void {
        
    }
}


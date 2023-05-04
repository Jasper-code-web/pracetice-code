type BusClass<T> = {
    on: (name: T, callback: Function) => void
    emit: (name: T) => void
}
type BusParams = string | number | symbol
type List = {
    [key: BusParams]: Array<Function>
}

class Bus<T extends BusParams> implements BusClass<T> {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: T, callback: Function) {
        let fn: Array<Function> = this.list[name] || []
        fn.push(callback)
    }
    emit(name: T, ...args: Array<any>) {
        let eventName = this.list[name]
        eventName.forEach(ev => {
            ev.call(this, args)
        })
    }
}

export default new Bus<number>()
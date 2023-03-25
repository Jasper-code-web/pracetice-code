import { StorageCls, Key, Empire, Data, Result } from './type'
import { Dictionaries } from './enum'
class Storage implements StorageCls {
    get<T>(key: Key): Result<T | null> {
        const value = localStorage.getItem(key)
        if(value) {
            const data:Data<T> = JSON.parse(value)
            const now = new Date().getTime()
            if(typeof data[Dictionaries.expire] === 'number' && data[Dictionaries.expire] < now) {
                return {
                    message: `您的${key}已过期`,
                    value: null
                }
            } else {
                return {
                    message: '成功',
                    value: data.value
                }
            }
        } else {
            return {
                message: "值无效",
                value: null
            }
        }
    }
    set<T>(key: Key, value: T, expire: Empire  = Dictionaries.permanent) {

        const data = {
            value: value,
            [Dictionaries.expire]: expire
        }

        localStorage.setItem(key, JSON.stringify(data))

    }
    clear() {
        localStorage.clear()
    }
    remove(key: Key) {
        localStorage.removeItem(key)
    }
}

export {Storage}
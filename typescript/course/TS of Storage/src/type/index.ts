import { Dictionaries } from "../enum"

export type Key = string

export type Empire = Dictionaries.permanent | number

export interface Result<T>{
    message: string
    value: T | null
}

export interface Data <T>{
    value: T,
    [Dictionaries.expire]: Empire
}

export interface StorageCls {
    get:<T> (key: Key) => Result<T | null>
    set:<T> (key: Key, value: T, expire: Empire) => void
    remove: (key: Key) => void
    clear: () => void
}
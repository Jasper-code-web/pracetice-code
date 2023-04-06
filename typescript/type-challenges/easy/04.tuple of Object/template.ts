// type TupleToObject<T extends readonly any[]> = {
//     [value in T[number]]: value
// }

// type TupleToObject<T extends readonly any[]> = {
//     [V in T[number]]: V
// }





type TupleToObject<T extends readonly any[]> = any

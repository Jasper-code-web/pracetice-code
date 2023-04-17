// type Last<T extends any[]> = any













type Last<T extends any[]> = 
T extends [...infer Before, infer Last] ? Last : never
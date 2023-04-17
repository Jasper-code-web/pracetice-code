// type Pop<T extends any[]> = any













type Pop<T extends any[]> = 
T extends [] ? [] :
T extends [...infer Before, infer Last] ? Before : never
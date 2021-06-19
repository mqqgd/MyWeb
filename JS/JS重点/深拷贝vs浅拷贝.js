/**
 * 深拷贝--->针对引用类型
 */

function deepClone(obj = {}) {
    if (obj == null || typeof obj !== 'object') {
        return obj
    }

    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        // key不可是原型的属性
        if (obj.hasOwnProperty(key)) {
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }

    return result

}


//test
const obj1 = {
    name: 'momo',
    age: 20,
    address: {
        city: 'xian'
    },
    arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'weishan'
console.log(obj1.address.city)
obj2.arr[1] = 'x'
console.log(obj1.arr)
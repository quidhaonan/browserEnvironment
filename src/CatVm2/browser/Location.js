// 构造函数
let Location = function Location(){
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(Location.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'Location',
//         configurable: true
//     }
// })
Object.defineProperty(Location.prototype, Symbol.toStringTag, {
    value: 'Location',
    configurable: false,
    enumerable: true
})

let location = {}
location.__proto__ = Location.prototype

// ============================================
location.href = ''
location.port = ''
// ============================================

// 伪造 toString 方法
catvm.safefunction(Location)

// 代理
location = catvm.proxy(location);
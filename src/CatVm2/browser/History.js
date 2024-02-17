// 构造函数
let History = function History(){
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(History.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'History',
//         configurable: true
//     }
// })
Object.defineProperty(History.prototype, Symbol.toStringTag, {
    value: 'History',
    configurable: true,
    enumerable: true
})

// ============================================
History.prototype.back = function back(){debugger}
// ============================================

let history = {}
history.__proto__ = History.prototype

// 伪造 toString 方法
catvm.safefunction(History)
catvm.safefunction(History.prototype.back)

// 代理
history = catvm.proxy(history)
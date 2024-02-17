// 构造函数
let Screen = function Screen(){
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(Screen.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'Screen',
//         configurable: true
//     }
// })
Object.defineProperty(Screen.prototype, Symbol.toStringTag, {
    value: 'Screen',
    configurable: true,
    enumerable: true
})

// ============================================
Screen.prototype.availWidth = 1040
Screen.prototype.availHeight = 1920
// ============================================

let screen = {}
screen.__proto__ = Screen.prototype

// 伪造 toString 方法
catvm.safefunction(Screen)

// 代理
screen = catvm.proxy(screen)
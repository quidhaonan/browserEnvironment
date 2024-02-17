// 构造函数
const WindowProperties = function WindowProperties(){

}

// Object.defineProperty(WindowProperties.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'WindowProperties',
//         configurable: true
//     }
// })
Object.defineProperty(WindowProperties.prototype, Symbol.toStringTag, {
    value: 'WindowProperties',
    configurable: true
})

WindowProperties.prototype.__proto__ = EventTarget.prototype

// 伪造 toString 方法
catvm.safefunction(WindowProperties)
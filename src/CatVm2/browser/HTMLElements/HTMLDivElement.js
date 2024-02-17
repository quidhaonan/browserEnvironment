// 构造函数
let HTMLDivElement = function HTMLDivElement(){
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(HTMLDivElement.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'HTMLDivElement',
//         configurable: true
//     }
// })
Object.defineProperty(HTMLDivElement.prototype, Symbol.toStringTag, {
    value: 'HTMLDivElement',
    configurable: true
})

// 伪造 toString 方法
catvm.safefunction(HTMLDivElement)

// 真实 div（原型链不完整）
catvm.memory.htmlElements['div'] = function(){
    let div = new (function(){})
    // ============================================
    div.align = ''
    // ============================================

    div.__proto__ = HTMLDivElement.prototype
    return div
}
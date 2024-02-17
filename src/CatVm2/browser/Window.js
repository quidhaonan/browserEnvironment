let window = this

let Window = function Window(){
    // 容易被检测到堆栈
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(WindowProperties.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'WindowProperties',
//         configurable: true
//     }
// })
Object.defineProperty(Window.prototype, Symbol.toStringTag, {
    value: 'Window',
    configurable: true,
    enumerable: false,
    writable: true
})

// ============================================
window.setTimeout = function setTimeout(func, time){
    // func：有可能是方法，也有可能是文本
    typeof(func) == 'function' ? func() : undefined
    typeof(func) == 'string' ? eval(func) :undefined

    // 正确应该 生成 UUID，并且保存到内存
    return 0
}

Window.prototype.PERSISTENT = 1
Window.prototype.TEMPORARY = 0
window.open = function(){debugger}
window.chrome = class chrome{}
window.DeviceOrientationEvent = function DeviceOrientationEvent(){debugger}
window.DeviceMotionEvent = function DeviceMotionEvent(){debugger}

// 后期提出去
// window.localStorage = class localStorage{}
// window.localStorage.getItem = function getItem(){debugger}
// catvm.safefunction(window.localStorage.getItem)
// window.localStorage.setItem = function setItem(){debugger}
// catvm.safefunction(window.localStorage.setItem)
// window.localStorage = catvm.proxy(window.localStorage)
// ============================================

Window.prototype.__proto__ = WindowProperties.prototype
window.__proto__ = Window.prototype

// 伪造 toString 方法
catvm.safefunction(Window)
catvm.safefunction(window.open)
catvm.safefunction(window.DeviceOrientationEvent)
catvm.safefunction(window.DeviceMotionEvent)
catvm.safefunction(window.setTimeout)

// 代理
Window = catvm.proxy(Window)
window = catvm.proxy(window)
window.chrome = catvm.proxy(window.chrome);
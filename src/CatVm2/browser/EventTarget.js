// 构造函数
let EventTarget = function EventTarget(){

}

// Object.defineProperty(EventTarget.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'EventTarget',
//         configurable: true
//     }
// })
Object.defineProperty(EventTarget.prototype, Symbol.toStringTag, {
    value: 'EventTarget',
    configurable: true,
    enumerable: false,
    writable: true
})

EventTarget.prototype.addEventListener = function addEventListener(type, callback){
    debugger
    if(!(type in catvm.memory.listeners)){
        catvm.memory.listeners[type] = []
    }
    catvm.memory.listeners[type].push(callback)
}
EventTarget.prototype.dispatchEvent = function dispatchEvent(){
    debugger
}
EventTarget.prototype.removeEventListener = function removeEventListener(){
    debugger
}

// 伪造 toString 方法
catvm.safefunction(EventTarget)
catvm.safefunction(EventTarget.prototype.addEventListener)
catvm.safefunction(EventTarget.prototype.dispatchEvent)
catvm.safefunction(EventTarget.prototype.removeEventListener)

// 代理
// EventTarget.prototype = catvm.proxy(EventTarget.prototype)
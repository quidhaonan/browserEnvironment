// 构造函数
let Storage = function Storage(){
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(Storage.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'Storage',
//         configurable: true
//     }
// })
Object.defineProperty(Storage.prototype, Symbol.toStringTag, {
    value: 'Storage',
    configurable: true,
    enumerable: false,
    writable: true
})

// // ============================================
Storage.prototype.length=0
Storage.prototype.clear=function clear(){
    debugger
    let temp = Object.keys(this)
    for(let i =0; i<temp.length; i++){
        delete this[temp[i]]
    }
}; catvm.safefunction(Storage.prototype.clear)
Storage.prototype.getItem=function getItem(key){
    debugger
    return this[key]
}; catvm.safefunction(Storage.prototype.getItem)
Storage.prototype.key=function key(index){
    debugger
    return Object.keys(this)[index]
}; catvm.safefunction(Storage.prototype.key)
Storage.prototype.removeItem=function removeItem(key){
    debugger
    delete this[key]
}; catvm.safefunction(Storage.prototype.removeItem)
Storage.prototype.setItem=function setItem(key, value){
    debugger
    this[key] = value
}; catvm.safefunction(Storage.prototype.setItem)

// 这里容易被检查，流程：方法提出来保护 toString，并注意不污染 window
Storage.prototype.__defineGetter__('length', function length(){
    debugger
    return Object.keys(this).length
})
// // ============================================

let localStorage = {}
localStorage.__proto__ = Storage.prototype
let sessionStorage = {}
sessionStorage.__proto__ = Storage.prototype

// 伪造 toString 方法
catvm.safefunction(Storage)

// 代理
localStorage = catvm.proxy(localStorage)
sessionStorage = catvm.proxy(sessionStorage)
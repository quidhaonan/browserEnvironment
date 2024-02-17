// 构造函数
let Document = function Document(){

}

// Object.defineProperty(Document.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'Document',
//         configurable: true
//     }
// })
Object.defineProperty(Document.prototype, Symbol.toStringTag, {
    value: 'Document',
    configurable: true,
    enumerable: false,
    writable: true
})

let document = {}
document.__proto__ = Document.prototype

// ============================================
document.cookie = ''
document.referrer = (location && location.href) || ''

document.getElementById = function getElementById(id){
    debugger
    // 用 id 匹配当前环境内存中已有的 Element
    return null
}
document.addEventListener = function addEventListener(type, listener, options, userCapture){
    debugger
}
document.createElement = function createElement(tagName){
    tagName = (tagName + '').toLowerCase()

    if(catvm.memory.htmlElements[tagName] == undefined){
        debugger
    }

    return catvm.proxy(catvm.memory.htmlElements[tagName]())
}
// ============================================

// 伪造 toString 方法
catvm.safefunction(Document)
catvm.safefunction(document.getElementById)
catvm.safefunction(document.addEventListener)
catvm.safefunction(document.createElement)

// 代理
document = catvm.proxy(document)
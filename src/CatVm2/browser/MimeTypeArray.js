// 构造函数
let MimeTypeArray = function MimeTypeArray(){
    throw new TypeError('Illegal constructor')
}

catvm.memory.MimeTypeArray.iterator = function values(){
    debugger

}; catvm.safefunction(catvm.memory.MimeTypeArray.iterator)

// Object.defineProperty(MimeTypeArray.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'MimeTypeArray',
//         configurable: true
//     }
// })
Object.defineProperty(MimeTypeArray.prototype, Symbol.toStringTag, {
    value: 'MimeTypeArray',
    configurable: true,
    enumerable: false,
    writable: true
})
Object.defineProperty(MimeTypeArray.prototype, Symbol.iterator, {
    value: catvm.memory.MimeTypeArray.iterator,
    configurable: true,
})

// ============================================
MimeTypeArray.prototype.item = function item(index){
    debugger
    return this[index]
}; catvm.safefunction(MimeTypeArray.prototype.item)
MimeTypeArray.prototype.namedItem = function namedItem(key){
    debugger
    return this[key]
}; catvm.safefunction(MimeTypeArray.prototype.namedItem)
MimeTypeArray.prototype.length = 0

for(let key in MimeTypeArray.prototype){
    if(typeof(MimeTypeArray.prototype[key]) != 'function'){
        MimeTypeArray.prototype.__defineGetter__(key, function(){
            // todo：直接抛出异常 throw new TypeError('Illegal constructor')
            return this[key]
        })
    } 
}
// ============================================

// 伪造 toString 方法
catvm.safefunction(MimeTypeArray)

// 依赖注入
navigator.mimeTypes = {}

navigator.mimeTypes.tempIndex = 0
for(let pindex = 0;pindex < navigator.plugins.length; pindex++){
    let plugin_ = navigator.plugins.item(pindex)
    for(let mindex = 0;mindex < plugin_.length; mindex++){
        let mimeType_ = plugin_.item(mindex)
        if(navigator.mimeTypes[mimeType_.type] == undefined){
            navigator.mimeTypes[navigator.mimeTypes.tempIndex++] = mimeType_
            Object.defineProperty(navigator.mimeTypes, mimeType_.type, {
                value: mimeType_
            })
        }
    }
}
navigator.mimeTypes.length = navigator.mimeTypes.tempIndex
delete navigator.mimeTypes.tempIndex

navigator.mimeTypes.__proto__ = MimeTypeArray.prototype

// 代理
navigator.mimeTypes = catvm.proxy(navigator.mimeTypes)
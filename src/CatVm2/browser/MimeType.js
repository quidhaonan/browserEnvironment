// 构造函数
let MimeType = function MimeType(){
    throw new TypeError('Illegal constructor')
}

Object.defineProperty(MimeType.prototype, Symbol.toStringTag, {
    value: 'MimeType',
    configurable: true
})

// ============================================
MimeType.prototype.description = ''
MimeType.prototype.enabledPlugin = null
MimeType.prototype.suffixes = ''
MimeType.prototype.type = ''

for(let key in MimeType.prototype){
    if(typeof(MimeType.prototype[key]) != 'function'){
        MimeType.prototype.__defineGetter__(key, function(){
            return this[key]
        })
    }
}
// ============================================

catvm.memory.MimeType.new = function(data, initPlugin){
    let mimetype = {}
    if(data != undefined){
        mimetype.description = data.description
        mimetype.enabledPlugin = initPlugin
        mimetype.suffixes = data.suffixes
        mimetype.type = data.type
    }

    mimetype.__proto__ = MimeType.prototype
    return mimetype
}

// 伪造 toString 方法
catvm.safefunction(MimeType)
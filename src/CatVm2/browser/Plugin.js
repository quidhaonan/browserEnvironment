// 构造函数
let Plugin = function Plugin(){
    throw new TypeError('Illegal constructor')
}

catvm.memory.Plugin.iterator = function values(){
    debugger

    return {
        next: function(){
            if(this.index_ == undefined){
                this.index_ = 0
            }
            return {
                done: this.index_ < this.self_.length ? false : true,
                value: this.self_[this.index_++]
            }
        },
        self_: this
    }
}; catvm.safefunction(catvm.memory.Plugin.iterator)

// Object.defineProperty(Plugin.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'Plugin',
//         configurable: true
//     }
// })
Object.defineProperty(Plugin.prototype, Symbol.toStringTag, {
    value: 'Plugin',
    configurable: true,
    enumerable: false,
    writable: true
})
Object.defineProperty(Plugin.prototype, Symbol.iterator, {
    value: catvm.memory.Plugin.iterator,
    configurable: true,
})

// ============================================
Plugin.prototype.description = ''
Plugin.prototype.filename = ''
Plugin.prototype.name = ''
Plugin.prototype.length = 0

Plugin.prototype.item = function item(index){
    // debugger
    return this[index]
}; catvm.safefunction(Plugin.prototype.item)
Plugin.prototype.namedItem = function namedItem(key){
    // debugger
    return this[key]
}; catvm.safefunction(Plugin.prototype.namedItem)

for(let key in Plugin.prototype){
    if(typeof(Plugin.prototype[key]) != 'function'){
        Plugin.prototype.__defineGetter__(key, function(){
            return this[key]
        })
    }
}
// ============================================

// {description:'npAliSSOLogin Plugin', filename:'npalissologin.dll', name:'AliSSOLogin plugin', MimeTypes:[{description:'AliSSOLogin', suffixes:'AliSSOLogin', type:'application/npalissologin'}, {description:'AliSSOLogin1', suffixes:'AliSSOLogin1', type:'application1/npalissologin'}]}
catvm.memory.Plugin.new = function(data){
    let plugin = {}

    if(data != undefined){
        plugin.description = data.description
        plugin.filename = data.filename
        plugin.name = data.name
        
        if(data.MimeTypes != undefined){
            for(let index = 0;index < data.MimeTypes.length; index++){
                let mimeTypeData = data.MimeTypes[index]
                let mimeType = catvm.memory.MimeType.new(mimeTypeData, plugin)

                plugin[index] =mimeType
                // plugin[mimeType.type] = mimeType
                // 使属性名变成灰色
                Object.defineProperty(plugin, mimeType.type, {
                    value: mimeType
                })
            }
            plugin.length = data.MimeTypes.length
        }
    }

    plugin.__proto__ = Plugin.prototype
    return plugin
}

// 伪造 toString 方法
catvm.safefunction(Plugin)
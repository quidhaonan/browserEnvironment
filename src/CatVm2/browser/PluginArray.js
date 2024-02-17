// 构造函数
let PluginArray = function PluginArray(){
    throw new TypeError('Illegal constructor')
}

catvm.memory.PluginArray.iterator = function values(){
    debugger
}; catvm.safefunction(catvm.memory.PluginArray.iterator)

// Object.defineProperty(PluginArray.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'PluginArray',
//         configurable: true
//     }
// })
Object.defineProperty(PluginArray.prototype, Symbol.toStringTag, {
    value: 'PluginArray',
    configurable: true,
    enumerable: false,
    writable: true
})
Object.defineProperty(PluginArray.prototype, Symbol.iterator, {
    value: catvm.memory.PluginArray.iterator,
    configurable: true,
})

// ============================================
PluginArray.prototype.item = function item(index){
    // debugger
    return this[index]
}; catvm.safefunction(PluginArray.prototype.item)
PluginArray.prototype.namedItem = function namedItem(key){
    // debugger
    return this[key]
}; catvm.safefunction(PluginArray.prototype.namedItem)
PluginArray.prototype.refresh = function refresh(){
    debugger
}; catvm.safefunction(PluginArray.prototype.refresh)
PluginArray.prototype.length = 0

for(let key in PluginArray.prototype){
    if(typeof(PluginArray.prototype[key]) != 'function'){
        PluginArray.prototype.__defineGetter__(key, function(){
            // todo：直接抛出异常 throw new TypeError('Illegal constructor')
            return this[key]
        })
    } 
}
// ============================================

// todo：全新定义
catvm.memory.PluginArray._ ={}
// 引入用户外部添加的 navigator.plugins
if(catvm.memory.PluginArray.temp != undefined){
    for(let index = 0;index < catvm.memory.PluginArray.temp.length; index++){
        let pluginTemp = catvm.memory.Plugin.new(catvm.memory.PluginArray.temp[index])
        catvm.memory.PluginArray._[index] = pluginTemp
        Object.defineProperty(catvm.memory.PluginArray._, pluginTemp.name, {
            value: pluginTemp
        })
    }
    catvm.memory.PluginArray._.length = catvm.memory.PluginArray.temp.length
}
catvm.memory.PluginArray._.__proto__ = PluginArray.prototype

// 伪造 toString 方法
catvm.safefunction(PluginArray)

// 代理
catvm.memory.PluginArray._ = catvm.proxy(catvm.memory.PluginArray._)

// 依赖注入
navigator.plugins = catvm.memory.PluginArray._
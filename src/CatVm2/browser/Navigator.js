// 构造函数
let Navigator = function Navigator(){
    throw new TypeError('Illegal constructor')
}

// Object.defineProperty(Navigator.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'Navigator',
//         configurable: true
//     }
// })
Object.defineProperty(Navigator.prototype, Symbol.toStringTag, {
    value: 'Navigator',
    configurable: true,
    enumerable: true
})

let navigator = {}
navigator.__proto__ = Navigator.prototype

// ============================================
Navigator.prototype.plugins = []
Navigator.prototype.languages = ['zh-CN', 'zh']
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'

// navigator 比较特殊，他会把属性继续定义到 静态属性中，所以我们也做一下
for(let key in Navigator.prototype){
    // 神奇的操作
    navigator[key] = Navigator.prototype[key]
    if(typeof(Navigator.prototype[key]) != 'function'){
        Navigator.prototype.__defineGetter__(key, function(){
            debugger
            // let e = new Error()
            // e.name = 'TypeError'
            // e.message = 'Illegal invocation'
            // e.stack = 'VM988:1 Uncaught TypeError: Illegal invocation \r\n \
            // at <anonymous>:1:19'
            // throw e
            throw new TypeError('Illegal constructor')
        })
    }
}
// ============================================

// 伪造 toString 方法
catvm.safefunction(Navigator)

// 代理
navigator = catvm.proxy(navigator)
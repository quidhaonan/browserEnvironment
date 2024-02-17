// 主要用来保护伪造的函数，让其更难被识破
;
(() => {
    'use strict';
    const $toString = Function.toString
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myTostring = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    }

    function set_native(func, key, value){
        Object.defineProperty(func, key, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        })
    }
    
    // 删除原型链上的 toString
    delete Function.prototype['toString']
    // 自己定义个 getter 方法
    set_native(Function.prototype, 'toString', myTostring)
    // 套个娃 保护一下我们定义的 toString 否则就暴露了
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }")
    // 导出函数到globalThis
    catvm.safefunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`)
    }; 
}).call(this)

// //by Ossian
// //算是完美hook toString的一个方法 妙啊

// //调用方法:
// function setTimeout() {};
// func_set_natvie(setTimeout);
// console.log(setTimeout);
// console.log(setTimeout.toString + '');

// //单独创建 不做hook 则会返回本来的字符串:
// function myfunction() {
//     123123123
// };
// console.log(myfunction);
// console.log(myfunction.toString + '');
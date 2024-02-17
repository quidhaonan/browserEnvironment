const fs = require('fs')
const catvm2 = require('./CatVm2/catvm2.node.js')
// https://www.mpmjs.com/package/vm2    npm i vm2
const { VM, VMScript } =require('vm2')

let catvm2code = catvm2.run({
    proxy: false
},
`
    catvm.addPlugin({description:'npAliSSOLogin Plugin', filename:'npalissologin.dll', name:'AliSSOLogin plugin', MimeTypes:[{description:'AliSSOLogin', suffixes:'AliSSOLogin', type:'application/npalissologin'}, {description:'AliSSOLogin1', suffixes:'AliSSOLogin1', type:'application1/npalissologin'}]})
`)
let codefile = `${__dirname}/code.js`
const vm = new VM()
let script = new VMScript(catvm2code + fs.readFileSync(codefile), `${__dirname}/testing.js`)

debugger
vm.run(script)
debugger

// 框架 封装的思想 功能单一 可扩展
// v8 node(vm2) 运行

// 变量名重复问题
// 调试日志 window.catvm 把框架功能集中管理
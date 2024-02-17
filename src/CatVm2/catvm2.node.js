const fs = require('fs')
// 框架工具模块
const vmtools = require('./tools/tools.node.js')
const htmlElements = require('./browser/HTMLElements/htmlElements.node.js')

function run(config, func_text){
    let code = ''
    // 引入框架工具代码
    code += vmtools.getCode() + '\r\n'

    // 引入用户框架配置 // 暂时这么写
    // code += 'catvm.memory.config.proxy = true;\r\n'
    for(let item in config){
        code += 'catvm.memory.config.' + item + '=' +config[item] + '\r\n'
    }
    code += func_text + ';\r\n'

    // 引入浏览器相关
    code += fs.readFileSync(`${__dirname}/browser/EventTarget.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/WindowProperties.js`) + '\r\n'
    
    code += fs.readFileSync(`${__dirname}/browser/Window.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/Navigator.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/History.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/Storage.js`) + '\r\n'

    code += fs.readFileSync(`${__dirname}/browser/MimeType.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/Plugin.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/PluginArray.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/MimeTypeArray.js`) + '\r\n'

    code += htmlElements.getCode() + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/Document.js`) + '\r\n'
    // 引入用户自定义环境

    code += 'debugger;\r\n'
    return code
}

module.exports = {
    run
}
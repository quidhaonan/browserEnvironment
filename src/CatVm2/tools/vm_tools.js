// 框架提供给使用者使用的工具，在此文件下的代码，必须要框架 run 方法执行后执行
// 更改浏览器的某些参数 常用的

catvm.addPlugin = function(data){
    // {description:'npAliSSOLogin Plugin', filename:'npalissologin.dll', name:'AliSSOLogin plugin', MimeTypes:[{description:'AliSSOLogin', suffixes:'AliSSOLogin', type:'application/npalissologin'}, {description:'AliSSOLogin1', suffixes:'AliSSOLogin1', type:'application1/npalissologin'}]}
    if(catvm.memory.PluginArray.temp == undefined){
        catvm.memory.PluginArray.temp = []
    }

    catvm.memory.PluginArray.temp.push(data)
}
const catvm = {}

// 框架运行内存
catvm.memory = {
    // 配置
    config: {
        // 默认关闭打印
        print: false,
        proxy: false
    },
    // 存储所有元素对象
    htmlElements: {},
    // 存储所有监听对象
    listeners: {},
    // 存储打印日志
    logs: [],
    // Navigator.js 存储对象
    Navigator: {},
    // Plugin.js 存储对象
    Plugin: {},
    // MimeType.js 存储对象
    MimeType: {},
    // PluginArray.js 存储对象
    PluginArray: {},
    // MimeTypeArray.js 存储对象
    MimeTypeArray: {}
}

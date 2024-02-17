# browserEnvironment
在 v8 引擎中补充浏览器环境

## 1. 函数
1. 获得某个对象配置的描述
    ```javascript
    Object.getOwnPropertyDescriptor(window,'WindowProperties')
    ```
    
## 2. 注意点
1. 原型中出现 get length: f length() 时，表明 get 方法使用 defineGetter

## 3. 框架说明

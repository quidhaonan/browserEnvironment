// 框架代理功能
catvm.proxy = function(obj){
    if(catvm.memory.config.proxy == false) return obj

    return new Proxy(obj, {
        set(target, property, value){

            // console.log('set', target, property, value)
            let log = {'类型':'set-->', '调用者':target, '属性':property, '值':value}
            catvm.memory.logs.push(log)
            console.table([log])
            
            return Reflect.set(...arguments)
        },
        get(target, property, receiver){

            // console.log('get', target, property, receiver)
            // console.log('get', target, property, target[property])
            let log = {'类型':'get<--', '调用者':target, '属性':property, '值':target[property]}
            catvm.memory.logs.push(log)
            console.table([log])

            return target[property]
        }
    })
}
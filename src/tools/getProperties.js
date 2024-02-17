// 获得一个对象下的属性值（例：getProperties(localStorage,'Storage')）
// pr：实例对象
// name_：自定义的属性名
function getProperties(pr, name_){
    let code = ''
    for(let fo in pr.__proto__){
        code += xx(pr, fo, name_)
    }
    return code
}

// 拼接键值对
function xx(pr, fo, name_){
    let code = ''
    switch(typeof(pr[fo])){
        case 'function':
            let temp = name_ + '.prototype.' + fo
            code = temp + '=' + 'function ' + fo + '(){debugger;}; catvm.safefunction(' + temp + ');'
            break
        case 'object':
            temp = name_ + '.prototype.' + fo
            code = temp + '=' + 'catvm.proxy(class ' + fo + '{});'
            break
        default:
            code = name_ + '.prototype.' + fo + '=' + pr[fo] + ';'
            break
    }
    return code
}
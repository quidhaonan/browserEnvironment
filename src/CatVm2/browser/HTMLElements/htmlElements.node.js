const fs = require('fs')

function getCode(){
    let code = ''
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`) + '\r\n'

    return code
}

module.exports = {
    getCode
}
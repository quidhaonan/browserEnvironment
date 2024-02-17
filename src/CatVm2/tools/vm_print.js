// 框架日志功能
catvm.print = {}
catvm.memory.print = []

catvm.print.log = function(){
    if(catvm.memory.config.print){
        console.table(catvm.memory.logs)
    }
}

catvm.print.getAll = function(){
    
}
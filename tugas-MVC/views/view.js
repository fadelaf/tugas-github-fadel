

class View{

    static help(){
        console.log("node todo.js")
        console.log("node todo.js help")
        console.log("node todo.js list")
        console.log("node todo.js add <task>")
        console.log("node todo.js update <id> <task>")
        console.log("node todo.js delete <id>")
        console.log("node todo.js complete <id>")
        console.log("node todo.js uncomplete <id>")
    }

    static list(items){
        console.log("Activities : \n")
        items.forEach(item => {

            let {id, task, status} = item

            if(status == true){
            console.log(`${id} [X] ${task}`)
            }
            else if(status == false)
            console.log(`${id} [ ] ${task}`)            
        });
    }

    static information(info){
        console.log(info)
    }


}

module.exports = View
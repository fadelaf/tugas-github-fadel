const command = process.argv[2]
const params = process.argv.slice(3)
const ActivityTaskController = require('./controller/ActivityTaskController')

// console.log(command, param)


/*
node todo.js
node todo.js help // Menampilkan command apa saja yang tersedia
node todo.js list // Melihat daftar TODO
node todo.js add <task> // Menambahkan TODO ke dalam list
node todo.js update <id> <task> // Melihat detail TODO sesuai `id` nya
node todo.js delete <id> // Menghapus TODO sesuai `id` nya
node todo.js complete <id> // Menandai status TODO selesai
node todo.js uncomplete <id> // Menandai status TODO belum selesai
*/


switch(command){

    case undefined:
    
        ActivityTaskController.help()
        break

    case "help" :
    
        ActivityTaskController.help()
        break
    
    case "list":

        ActivityTaskController.list()
        break

    case "add":

        ActivityTaskController.add(params.join(' '))
        break

    case "update":
 
        ActivityTaskController.update(params)
        break

    case "delete":

        ActivityTaskController.delete(params)
        break

    case "complete":

        ActivityTaskController.complete(params)
        break

    case "uncomplete":

        ActivityTaskController.uncomplete(params)
        break
    
    default:
    
        ActivityTaskController.help()
        break
    



}
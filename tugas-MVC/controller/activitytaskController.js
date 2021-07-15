
const ActivityTask = require('../model/activitytask')
const { getActivityTask } = require('../model/activitytask')
const View = require('../views/View')

class ActivityTaskController{

    static help(){
        View.help()
    }
    static list(){
        let items = getActivityTask()
        View.list(items)
    }

    static add(params){
        let info = ActivityTask.add(params)
        View.information(info)
    }

    static delete(params){
        let info = ActivityTask.delete(params)
        View.information(info)

    }

    static update(params){
        let info = ActivityTask.update(params)
        View.information(info)

    }

    static complete(params){
        let info = ActivityTask.complete(params)
        View.information(info)
    }

    static uncomplete(params){
        let info = ActivityTask.uncomplete(params)
        View.information(info)
    }

    // static information(){
    //     let info = ActivityTask.information()
    //     View.information(info)
    // }
}


module.exports = ActivityTaskController
const fs = require('fs')


class ActivityTask{

    constructor(id,task,status,created_at,completed_at){

        this.id = id
        this.task = task
        this.status = status
        this.created_at = created_at
        this.completed_at = completed_at

    }



    static getActivityTask(){

        // ambil file json
        let activityFile = fs.readFileSync('./data.json','utf8')
        // ubah json ke array of js object
        let activityFileObj = JSON.parse(activityFile)


        // melakukan instansiasi agar menjadi bentul array of class
        let activity = activityFileObj.map(item => {

            let {id, task, status, created_at, completed_at} = item

            return new ActivityTask(id,task,status,created_at,completed_at)

        } ) 

        return activity

    }

    static add(newActivity){

        let activity = this.getActivityTask()
        let id = activity[activity.length - 1].id + 1
        let d = new Date()
        let time = `${d.toLocaleString()}` 


        let [task, status, created_at, completed_at] = [newActivity, false, time, null]  

        activity.push(new ActivityTask(id,task,status,created_at,completed_at))
        
        this.saveToJSON(activity)
        // console.log(activity)
        return `Activity ${task} has been added`


    }

    static saveToJSON(items){

        let activityFileToJSON = JSON.stringify(items, null, 3) //null,3 buat ngerapiin json
        
        fs.writeFileSync('./data.json',activityFileToJSON)

    }

    static delete(idToDelete){

        let activity = this.getActivityTask()
        // console.log(activity)
        let success = 0
        let id = idToDelete[0]

        activity.forEach((act,idx) => {

            if(act['id'] == id){

                activity.splice(idx,1)
                success = 1
            }
            
        });

        if( success === 1){
            
            this.saveToJSON(activity)
            return 'Activity has been deleted'


        }else{

            return `activity cannot be deleted / no data`

        }


    }

    static update(activityToUpdate){

        let activity = this.getActivityTask()

        let [id, task] = activityToUpdate

        let oldTask = ''

        let success = 0

        activity.map( act => {

            if(act['id'] == id){

                oldTask = act['task']
                act['task'] = task
                success = 1

            }
        })

        if(success === 1){

            this.saveToJSON(activity)

            return`Activity "${oldTask}" has been updated to "${task}"`
                
        }
        else{

            return`Wrong activity`

        }


    }

    static complete(taskToComplete){

        let activity = this.getActivityTask()
        let id = taskToComplete[0]
        let d = new Date()
        let info = ''

        activity.map(act =>{
            if(act['id'] == id && act['status'] === true){
                
                info = 'You had Already Completed This Task Before'

            }
            else if(act['id'] == id && act['status'] === false){

                act['status'] = true
                act['completed_at'] = `${d.toLocaleString()}`

                info = 'Task is Completed'

            }
        })

        this.saveToJSON(activity)
        return info

    }


    static uncomplete(taskToUncomplete){

        let activity = this.getActivityTask()
        let id = taskToUncomplete[0]
        let d = new Date()
        let info = ''

        activity.map(act =>{
            if(act['id'] == id && act['status'] === true){


                act['status'] = false
                act['completed_at'] = null
                info = `${act['task']} has been to uncompleted` 
                

            }
            else if(act['id'] == id && act['status'] === false){

                info = `It's still uncomplete`

            }
        })

        this.saveToJSON(activity)
        return info

    }


}

// ActivityTask.update(3,"makan besar")

module.exports = ActivityTask
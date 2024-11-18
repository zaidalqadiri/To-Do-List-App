import React, {useState} from 'react'

function Tasks() {
    
    const [tasks, setTasks] = useState(["Walk dog", "Grocery Shopping"]);

    function handleAddTask() {

    }

    function handleRemoveTask() {

    }

    function handleCompletedTask() {

    }

    function handleIncompletedTask() {

    }

    return(<div>
                <input type="text" placeholder="Enter a task" />
                <button >Add</button>
    
            </div>)

}

export default Tasks
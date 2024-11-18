import React, {useState} from 'react'

function Tasks() {
    
    const [tasks, setTasks] = useState(["Walk dog", "Grocery Shopping"]);

    function handleAddTask() {
        const newTask = document.getElementById("textInput").value;
        document.getElementById("textInput").value = "";

        setTasks(t => [...t, newTask]);
    }

    function handleRemoveTask() {

    }

    function handleCompletedTask() {

    }

    function handleIncompletedTask() {

    }

    return(<div>
                <input type="text" placeholder="Enter a task" id="textInput"/>
                <button onClick={handleAddTask}>Add</button>
                <ul>
                    {tasks.map((task, index) => <li key={index}>{task}</li>)}
                </ul>
    
            </div>)

}

export default Tasks
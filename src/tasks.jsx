import React, {useState} from 'react'

function Tasks() {
    
    const [tasks, setTasks] = useState(["Walk dog", "Grocery Shopping"]);

    function handleAddTask() {
        const newTask = document.getElementById("textInput").value;
        document.getElementById("textInput").value = "";

        setTasks(t => [...t, newTask]);
    }

    function handleRemoveTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleCompletedTask() {

    }

    function handleIncompletedTask() {

    }

    return(<div>
                <input type="text" placeholder="Enter a task" id="textInput"/>
                <button id='add-button' onClick={handleAddTask}>Add</button>
                <ul>
                    {tasks.map((task, index) => (<li key={index}>
                                                {task}
                                                <button id="completed-button" onClick={handleCompletedTask}>✅</button>
                                                <button id="incompletebutton" onClick={handleIncompletedTask}>❌</button>
                                                <button id="remove-button" onClick={() => handleRemoveTask(index)}>Remove</button>
                                                </li>
                                            ))} 
                </ul>
    
            </div>)

}

export default Tasks
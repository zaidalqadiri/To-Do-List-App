import React, {useState} from 'react'

function Tasks() {
    
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    function handleAddTask() {
        const newTask = document.getElementById("textInput").value;
        document.getElementById("textInput").value = "";

        setTasks(t => [...t, newTask]);
    }

    function handleRemoveTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleCompletedTask(index) {
        setCompletedTasks(ct => [...ct, index])
    }

    function handleIncompletedTask(index) {
        setCompletedTasks(ct => ct.filter(i => i !== index))
    }

    return(<div>
                <h1>To-Do-List</h1>
                <input type="text" placeholder="Enter a task" id="textInput"/>
                <button id='add-button' onClick={handleAddTask}>Add</button>
                <ul>
                    {tasks.map((task, index) => (<li key={index}
                                                style={{backgroundColor: completedTasks.includes(index) ? "#31cd2f" : "white",}}>
                                                <span>{task}</span>
                                                <button id="completed-button" onClick={() => handleCompletedTask(index)}>✅</button>
                                                <button id="incompleted-button" onClick={() => handleIncompletedTask(index)}>❌</button>
                                                <button id="remove-button" onClick={() => handleRemoveTask(index)}>Remove</button>
                                                </li>))} 
                </ul>
            </div>);
}

export default Tasks
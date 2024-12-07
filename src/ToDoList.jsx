import { useState } from "react";

function ToDoList (){

    const [task, setTask] = useState([]);

    const [newTask, setNewTask] = useState('');


    const input = (e) =>{
 
        setNewTask(e.target.value);
    }

    const addTask = () => {

        //if input is blank do not add it to the list;

        if(newTask === ''){

            alert("Enter A Task")
            return;
        }
        setTask(t=>[...t, newTask]);
        setNewTask('');
    }

    const deleteTask = (index) => {

        setTask((t) => t.filter((_, i) => i !== index));
        console.log(task);


    }

    const moveTaskUp = (index) => {
        if (index === 0) return; // Cannot move the first task up

        const tasksCopy = [...task];
        [tasksCopy[index], tasksCopy[index - 1]] = [tasksCopy[index - 1], tasksCopy[index]]; // Swap with the above task
        setTask(tasksCopy);
    };

    const moveTaskDown = (index) => {

        if (index === task.length-1) return; // Cannot move the first task up

        //copy the array
        const tasksCopy = [...task];
        [tasksCopy[index], tasksCopy[index + 1]] = [tasksCopy[index + 1], tasksCopy[index]]; // Swap with the above task
    
        setTask(tasksCopy);

    }

    const clearList = () =>{

        setTask([]);
    }
    return(
    

        <>
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter A Task..." value={newTask} onChange={input}></input>
            </div>

            <button onClick={addTask}>
                Submit
            </button>

            <ol>
                    {task.map((tasks, index) => (
                        <li key={index}>
                            {tasks}
                            <button onClick={() => deleteTask(index)}>Delete Task</button>
                            <button onClick={() => moveTaskUp(index)}>Move Up</button>
                            <button onClick={() => moveTaskDown(index)}>Move Down</button>
                        </li>
                    ))}
                </ol>

                <div>
                    <button onClick={clearList}>
                        Clear List
                    </button>
                </div>
    
        </div>
        </>
    )
}

export default ToDoList;
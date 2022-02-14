import React, { useState, useEffect } from 'react';
import Task from "./Task";
import CreateTask from "./CreateTask";
import './Todo.css';
import MySelect from "./UI/Select/MySelect";


function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);
    const [selectedSort,setSelectedSort]=useState(" ")
    const [searchQuery,setSearchQuery]=useState(" ")


    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) }, [tasks]);


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const sortPosts=(sort) => {
        setSelectedSort(sort);
        setTasks([...tasks].sort((a,b)=>a[sort].localeCompare(b[sort])))
    }

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
            <input
                type='text'
                value={searchQuery}
                onChange={e=>setSearchQuery(e.target.value)}
                placeholder='Поиск...'
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка "
                options={[
                    {value:"title",name: "По названию"},
                    {value:"body",name: "По описанию"},
                ]}
            />
        </div>
    );
}
export default Todo;


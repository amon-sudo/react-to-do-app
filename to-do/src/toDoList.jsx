
import React from 'react'
import { useState } from 'react'
function ToDoList() {

  const [tasks, setTasks] = useState(["Eat Bfreakfas", "Take a shower", "Walk the dog"])
  const [newTask, setNewTask] = useState("")

  function handleInputChange (event){
    setNewTask(event.target.value)
  }
  function addTask (){

  }
  function deleteTask (index) {

  }
  function moveTaskUp (index) {

  }
  function moveTaskUp(index) {

  }
  return (
    <>
    <div className='to-do-list'>
          <h1>To-Do-List</h1>

            <input type='text'
            placeholder='enter a task'
            value={newTask}
            onChange={handleInputChange}/>
          <button className='add-btn' onClick={addTask}>ADD TASK</button>
        <ol>
          {tasks.map((task, index) =>{
            <li key ={index}>
              <span className='text'>{task}</span>
            </li>

          }) }
        </ol>
    </div>
    </>
  )
}

export default ToDoList
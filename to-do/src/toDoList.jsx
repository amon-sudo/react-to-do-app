
import React from 'react'
import { useState } from 'react'
function toDoList() {

  const [tasks, setTasks] = useState([])
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


    </div>
    </>
  )
}

export default toDoList
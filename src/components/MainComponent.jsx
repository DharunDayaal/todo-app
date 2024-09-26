import React, { useState } from 'react'
import './mainComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';



const ButtonsComponent = () => {

  const [taskList, setTaskList] = useState("all");
  const[checked, setChecked] = useState("false");

  const handleSelectChange = (e) => {
    setTaskList(e.target.value)
  }

  const handleAddTaskButton = (e) => {
    console.log("Add Task Button clicked")
  }

  const handleCheckboxState = (e) => {
    setChecked(e.target.value);
    
  }

  const handleDeleteButton = (e) =>{
    console.log("Delete Button clicked")
  
  }
  const handleEditButton = (e) =>{
    console.log("Edit Button clicked")
  }

  console.log(taskList)
  return (
    <>
      <div className="main">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handleAddTaskButton}>Add Task</button>
          <select onChange={handleSelectChange} className="form-select form-select-lg w-25 bg-dark-subtle text-dark">
              <option value="all">All</option>
              <option value="incomplete">Incompleted</option>
              <option value="completed">Completed</option>
          </select>
        </div>
        <div className=" task-list bg-dark-subtle">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex w-100 w-100 divw gap-4">
                <input type="checkbox" onChange={handleCheckboxState} />
                <div className="d-block align-items-center divw">
                  <p>egwghi</p>
                  <p>ejakfkla</p>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-3">
              <button onClick={handleDeleteButton} ><FontAwesomeIcon icon={faTrashCan} /></button>
              <button onClick={handleEditButton} ><FontAwesomeIcon icon={faPen} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  // REST - representation of a resource to transfer resource state which lives on the server into application state on the client.
  // representation here is JSON format of the data which is located in the server.
  
}

export default ButtonsComponent
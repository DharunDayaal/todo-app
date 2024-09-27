import React, { useRef, useState } from 'react';
import './mainComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import CreateTaskComponent from './CreateTaskComponent';
import EditTaskComponent from './EditTaskComponent';

const MainComponent = () => {
  const [taskList, setTaskList] = useState("all");
  const [checked, setChecked] = useState(false);
  const [taskAddComponent, setTaskAddComponent] = useState(false); 
  const [editTaskComponent, setEditTaskComponent] = useState(false);
  const [tasks, setTasks] = useState([])
  const taskIndexReference = useRef(null)

  const handleSelectChange = (e) => {
    setTaskList(e.target.value);
  };

  const handleAddTaskButton = () => {
    setTaskAddComponent(true);
  };

  const handleCheckboxState = (e) => {
    setChecked(e.target.value);
  };

  const handleDeleteButton = (indexToDelelteTask) => {
    const deleteTask = tasks.filter((_, index) => index !== indexToDelelteTask)
    setTasks(deleteTask)
  };

  const handleEditButton = () => {
    setEditTaskComponent(true);
  };

  const handleSaveChanges = (taskName, status) => {
    const newTask = {taskName, status};
    setTasks([...tasks, newTask])
    console.log("Task added: ", newTask)
  }

  return (
    <>
      <div className="main">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handleAddTaskButton}>
            Add Task
          </button>
          {/* Pass taskAddComponent as a prop to CreateTaskComponent */}
          {taskAddComponent && (
            <CreateTaskComponent show={taskAddComponent} setShow={setTaskAddComponent} onSave={handleSaveChanges} />
          )}
          <select
            onChange={handleSelectChange}
            className="form-select form-select-lg w-25 bg-dark-subtle text-dark"
            value={taskList}
          >
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="task-list bg-dark-subtle">
          {
            tasks.map((task, index) => (
              <div key={index} className="w-100 d-flex justify-content-between align-items-center">
                <div className="d-flex w-100 divw gap-4">
                  <input type="checkbox" onChange={handleCheckboxState} checked={checked} />
                  <div className="d-block align-items-center divw">
                    <p>{task.taskName}</p>
                    <p>{task.status}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between btn-group btn-group-lg btn-group-sm align-items-center gap-3">
                  <button
                    onClick={() => handleDeleteButton(index)}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button
                    onClick={handleEditButton}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  {editTaskComponent && <EditTaskComponent show={editTaskComponent} setShow={setEditTaskComponent} />}
                </div>
              </div>
            ))
          }
          
        </div>
      </div>
    </>
  );
};

export default MainComponent;
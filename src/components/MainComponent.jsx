import { useRef, useState } from "react";
import "./mainComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import CreateTaskComponent from "./CreateTaskComponent";
import EditTaskComponent from "./EditTaskComponent";

const MainComponent = () => {
  const [taskList, setTaskList] = useState("all");
  const [taskAddComponent, setTaskAddComponent] = useState(false);
  const [editTaskComponent, setEditTaskComponent] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [indexToEditTask, setIndexToEditTask] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const indexReference = useRef(null)

  const handleSelectChange = (e) => {
    setTaskList(e.target.value);
  };

  const handleAddTaskButton = () => {
    setTaskAddComponent(true);
  };

  const handleCheckboxChange = (event, index) => {
    const { checked } = event.target;

    if (checked) {
      setCheckedItems([...checkedItems, index]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== index));
    }
  };

  const handleDeleteButton = (indexToDeleteTask) => {
    const deleteTask = tasks.filter((_, index) => index !== indexToDeleteTask);
    setTasks(deleteTask);
    setCheckedItems(checkedItems.filter((item) => item !== indexToDeleteTask));
  };

  const handleEditButton = (index) => {
    setIndexToEditTask(index);
    setEditTaskComponent(true);
  };

  const handleNewTask = (taskName, status) => {
    const newTask = { taskName, status };
    setTasks([...tasks, newTask]);
    console.log("Task added: ", newTask);
  };

  const handleSaveChanges = (taskName, status) => {
    const editTask = tasks.map((task, index) =>
      index === indexToEditTask ? { taskName, status } : task
    );
    setTasks(editTask);
    setEditTaskComponent(false);
    console.log("Task Edited: ", taskName, status);
  };

  return (
    <>
      <div className="main">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handleAddTaskButton}>
            Add Task
          </button>
          {taskAddComponent && (
            <CreateTaskComponent
              show={taskAddComponent}
              setShow={setTaskAddComponent}
              onSave={handleNewTask}
            />
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
          {tasks.length === 0 ? (
            <h1>No TASK</h1>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="w-100 d-flex justify-content-between align-items-center mb-3 mb-sm-3 mb-md-3 mb-lg-3 "
              >
                <div className="d-flex w-100 divw gap-4">
                  <input
                    type="checkbox"
                    onChange={(event) => handleCheckboxChange(event, index)}
                    checked={checkedItems.includes(index)}
                  />
                  <div className="d-block align-items-center divw">
                    {/* <p>{task.taskName}</p> */}
                    {checkedItems.includes(index) ? (
                      <p style={{ textDecoration: "line-through" }}>
                        {task.taskName}
                      </p>
                    ) : (
                      <p>{task.taskName}</p>
                    )}
                    <p>{task.status}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between btn-group btn-group-lg btn-group-sm align-items-center gap-3">
                  <button
                    onClick={() => handleDeleteButton(index)}
                    style={{ width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button
                    onClick={() => handleEditButton(index)}
                    style={{ width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {editTaskComponent && (
          <EditTaskComponent
            show={editTaskComponent}
            setShow={setEditTaskComponent}
            taskName={tasks[indexToEditTask].taskName}
            status={tasks[indexToEditTask].status}
            onSave={handleSaveChanges}
          />
        )}
      </div>
    </>
  );
};

export default MainComponent;

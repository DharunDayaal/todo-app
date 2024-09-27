import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EditTaskComponent from './EditTaskComponent';

const CreateTaskComponent = ({ show, setShow, onSave }) => {

    const[taskName, setTaskName] = useState("");
    const[status, setStatus] = useState("incomplete")

    const handleClose = () => setShow(false); 
    const handlestatus = (e) => setStatus(e.target.value)
    const handleTaskName = (e) => setTaskName(e.target.value)
    const handleSaveChanges = (e) => {
      onSave(taskName, status)
      setShow(false)
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add task { taskName ? taskName : '' }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                autoFocus
                onChange={handleTaskName}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Status</Form.Label>
              <Form.Select onChange={handlestatus} value={status}>
                <option value="inclomplete">Incomplete</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <EditTaskComponent taskName={taskName} />
    </>
  );
};

export default CreateTaskComponent;

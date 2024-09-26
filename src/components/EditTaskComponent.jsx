import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditTaskComponent = ({ show, setShow, taskName }) => {

  const[editName, setEditName] = useState("");
  const[status, setStatus] = useState("incomplete")

  const handleClose = () => setShow(false); 
  const handlestatus = (e) => setStatus(e.target.value)
  const handleEditTaskName = (e) => setEditName(e.target.value)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit { editName ? editName : taskName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Edit </Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit task name"
                autoFocus
                onChange={handleEditTaskName}
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTaskComponent;

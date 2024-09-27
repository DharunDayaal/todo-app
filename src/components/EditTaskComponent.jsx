import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const EditTaskComponent = ({ show, setShow, taskName, taskStatus, onSave }) => {
  const [editName, setEditName] = useState(taskName || "");
  const [status, setStatus] = useState(taskStatus || "incomplete");

  const handleClose = () => setShow(false);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleEditTaskName = (e) => setEditName(e.target.value);
  const handleSave = () => {
    onSave(editName, status);
    setShow(false);
  };

  useEffect(() => {
    setEditName(taskName);
    setStatus(taskStatus);
  }, [taskName, taskStatus]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {editName || taskName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editTaskName">
              <Form.Label>Edit Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit task name"
                autoFocus
                value={editName}
                onChange={handleEditTaskName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editTaskStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select onChange={handleStatusChange} value={status}>
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTaskComponent;

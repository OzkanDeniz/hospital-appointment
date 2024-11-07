import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({handleClose,show,drName}) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const [name, setname] = useState("")
  const [date, setdate] = useState("")
  console.log(name,date)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appoinment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Day&Time:</Form.Label>
              <Form.Control onChange={(e)=>setdate(e.target.value)} type="datetime-local" placeholder="date" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className="text-center ">
              <Button type="submit" variant="success" className="me-2">
                Save
              </Button>
              <Button type="button" variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;

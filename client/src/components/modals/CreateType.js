import { Button, Form, Modal } from "react-bootstrap";

function CreateType({ show, onHide }) {
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Enter name of the type"} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Close
        </Button>
        <Button variant={"outline-success"} onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateType;

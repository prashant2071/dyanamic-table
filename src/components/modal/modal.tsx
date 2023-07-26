import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

const CommonModal = (props: any) => {

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Modal body text goes here.</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" value={props.user.email} onChange={props.onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" placeholder="Enter firstName" value={props.user.firstName} onChange={props.onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="email" placeholder="Enter lastName" value={props.user.lastName} onChange={props.onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Enter gender" value={props.user.gender}  onChange={props.onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>age</Form.Label>
              <Form.Control type="number" name="age" placeholder="Enter age" value={props.user.age}  onChange={props.onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" placeholder="Enter username" value={props.user.username} onChange={props.onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" name="password" placeholder="Enter password" value={props.user.password} onChange={props.onChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={props.submitEditHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommonModal;

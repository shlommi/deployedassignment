import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

class DeleteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Delete Movie
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Delete movie?</ModalHeader>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Ok
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteMovie;

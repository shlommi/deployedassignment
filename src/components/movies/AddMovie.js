import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { getMovies } from "../../actions/actionsCreators";
import PropTypes from "prop-types";
import validTitle from "../../validTitleFunc";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      errors: {},
      Title: "",
      Year: "",
      Runtime: "",
      Genre: "",
      Director: ""
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  toggleModal = () =>
    this.setState({
      modalOpen: !this.state.modalOpen,
      errors: {},
      Title: "",
      Year: "",
      Runtime: "",
      Genre: "",
      Director: ""
    });
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    const { Title, Year, Runtime, Genre, Director } = this.state;
    const TitlesInMovies = this.props.movies.map(title => title.Title);
    e.preventDefault();
    if (Title === "") {
      this.setState({ errors: { Title: "Title is required" } });
      return;
    }
    if (TitlesInMovies.includes(Title.trim())) {
      this.setState({ errors: { Title: "Movie name is already existing!" } });
      return;
    }
    if (Year === "") {
      this.setState({ errors: { Year: "Year is required" } });
      return;
    }
    let regex = /^\d{4}$/;
    if (Year < 1900 || isNaN(Year) || !regex.test(Year)) {
      this.setState({ errors: { Year: "Valid Year is required" } });
      return;
    }
    if (Runtime === "") {
      this.setState({ errors: { Runtime: "Runtime is required" } });
      return;
    }
    if (Genre === "") {
      this.setState({ errors: { Genre: "Genre is required" } });
      return;
    }
    if (Director === "") {
      this.setState({ errors: { Director: "Director is required" } });
      return;
    }

    this.toggleModal();
  };

  render() {
    const { Title, Year, Runtime, Genre, Director, errors } = this.state;
    validTitle(Title);
    return (
      <div>
        <Button color="info" onClick={this.toggleModal} className="mt-2">
          Add New Movie
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader>Add Movie</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <TextInputGroup
                label="Title"
                name="Title"
                placeholder="Add title name"
                value={Title}
                onChange={this.handleChange}
                error={errors.Title}
              />
              <TextInputGroup
                label="Year"
                name="Year"
                placeholder="Add year"
                value={Year}
                onChange={this.handleChange}
                error={errors.Year}
              />
              <TextInputGroup
                label="Runtime"
                name="Runtime"
                placeholder="Add runtime"
                value={Runtime}
                onChange={this.handleChange}
                error={errors.Runtime}
              />
              <TextInputGroup
                label="Genre"
                name="Genre"
                placeholder="Add genre"
                value={Genre}
                onChange={this.handleChange}
                error={errors.Genre}
              />

              <TextInputGroup
                label="Director"
                name="Director"
                placeholder="Add director"
                value={Director}
                onChange={this.handleChange}
                error={errors.Director}
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="info" onClick={this.handleSubmit}>
              Save
            </Button>
            <Button color="danger" active={true} onClick={this.toggleModal}>
              Cancle
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AddMovie.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(AddMovie);

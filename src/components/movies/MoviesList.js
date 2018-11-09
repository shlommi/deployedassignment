import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/actionsCreators";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from "reactstrap";

class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props;
    let moviesCards = movies.map(movie => {
      return (
        <Col md="4" key={movie.imdbID}>
          <MovieCard movie={movie} className="mb-2" />
        </Col>
      );
    });

    return (
      <Container fluid>
        <h2 className="display-4 mb-2">Find movies</h2>
        <Row>{moviesCards}</Row>
      </Container>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MoviesList);

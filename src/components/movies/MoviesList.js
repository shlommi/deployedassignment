import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoviesAndDetails } from "../../actions/actionsCreators";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from "reactstrap";

class MoviesList extends Component {
  componentDidMount() {
    this.props.fetchMoviesAndDetails();
  }

  render() {
    const { movies } = this.props;
    let moviesCards = movies.map(movie => {
      return (
        <Col md="4" key={movie.imdbID}>
          <MovieCard movie={movie} movieId={movie.imdbID} className="mb-2" />
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
  fetchMoviesAndDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { fetchMoviesAndDetails }
)(MoviesList);

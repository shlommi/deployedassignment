import React, { Component } from "react";
import { Card, CardImg, CardBody, Badge, Collapse } from "reactstrap";
import { connect } from "react-redux";
import { getDetailsMovie } from "../../actions/actionsCreators";
import PropTypes from "prop-types";
import EditMovie from "./EditMovie";
import DeleteMovie from "./DeleteMovie";
import validTitle from "../../validTitleFunc";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      Title: "",
      Year: "",
      Runtime: "",
      Genre: "",
      Director: ""
    };
  }

  handleShowDetails = id => {
    this.props.getDetailsMovie(id);
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { imdbID, Poster, Title } = this.props.movie;
    const { Year, Runtime, Genre } = this.props.moreDetails;
    validTitle(Title);
    return (
      <div>
        <Card
          style={{ cursor: "pointer" }}
          className="shadow"
          onClick={() => this.handleShowDetails(imdbID)}
          onMouseLeave={() => this.setState({ collapse: false })}
        >
          <CardImg top width="100%" src={Poster} alt="Card image cap" />

          <Collapse
            isOpen={this.state.collapse}
            onMouseLeave={() => this.setState({ collapse: false })}
          >
            <Card>
              <CardBody>
                <h5>
                  <Badge color="info">Title: </Badge>
                  {Title}
                </h5>
                <h5>
                  <Badge color="info">Year:</Badge>
                  {Year}
                </h5>
                <h5>
                  <Badge color="info">Runtime:</Badge>
                  {Runtime}
                </h5>
                <h5>
                  <Badge color="info">Genre:</Badge>
                  {Genre}
                </h5>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <EditMovie editIdMovie={imdbID} />
                  <DeleteMovie />
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </Card>
      </div>
    );
  }
}

MovieCard.propTypes = {
  moreDetails: PropTypes.object.isRequired,
  getDetailsMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  moreDetails: state.movies.detailsMovie
});

export default connect(
  mapStateToProps,
  { getDetailsMovie }
)(MovieCard);

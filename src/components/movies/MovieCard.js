import React, { Component } from "react";
import { Card, CardImg, CardBody, Badge, Collapse } from "reactstrap";
import { connect } from "react-redux";
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

  handleShowDetails = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { imdbID, Poster, Title } = this.props.movie;
    validTitle(Title);

    const { moreDetails } = this.props;

    if (!this.props.moreDetails) {
      return null;
    }

    return (
      <div>
        <Card style={{ cursor: "pointer" }} className="shadow">
          <CardImg
            top
            width="100%"
            src={Poster}
            alt="Card image cap"
            onClick={() => this.handleShowDetails()}
          />

          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <h5>
                  <Badge color="info">Title: </Badge>
                  {Title}
                </h5>
                <h5>
                  <Badge color="info">Year:</Badge>
                  {moreDetails.Year}
                </h5>
                <h5>
                  <Badge color="info">Runtime:</Badge>
                  {moreDetails.Runtime}
                </h5>
                <h5>
                  <Badge color="info">Genre:</Badge>
                  {moreDetails.Genre}
                </h5>
                <div style={{ display: "flex" }}>
                  <EditMovie editIdMovie={imdbID} />
                  <DeleteMovie deleteIdMovie={imdbID} />
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
  moreDetails: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    moreDetails: state.subDetails.find(item => item.imdbID === ownProps.movieId)
  };
};

export default connect(mapStateToProps)(MovieCard);

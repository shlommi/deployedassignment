import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";
import MovieList from "./components/movies/MoviesList";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <MovieList />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  //동기화, axios가 끝날 때까지 기다린다
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    console.log(movies);
    this.setState({ movies, isLoading: false }); //movies하나만 써도 된다. ES6 하나는 배열, 하나는 axios
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => {
              //console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;

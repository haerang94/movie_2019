import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends Component {
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

    //console.log(movies);
    this.setState({ movies, isLoading: false }); //movies하나만 써도 된다. ES6 하나는 배열, 하나는 axios
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        ) : (
          <div className="movies">
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
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

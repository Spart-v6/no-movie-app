import React from "react";
import "./style.scss";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MoviePage from "../../components/MoviePage";
import { AiFillStar } from "react-icons/ai";
import { API_KEY, convertToReadableDate } from "../../common/everything";
import {MoviesArrayType} from "../../common";

const Home = () => {
  const [popularMovies, setPopularMovies] = React.useState<MoviesArrayType[]>([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setPopularMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);  

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        showStatus={false}
        infiniteLoop
      >
        {popularMovies.map((popularMovie) => (
          <Link
            to={`/movie/${popularMovie?.id}`}
            className="linkMovie"
            key={popularMovie.id}
          >
            <div className="posterName">
              <img
                src={`https://image.tmdb.org/t/p/original${popularMovie?.backdrop_path}`}
                alt="Unable to load image"
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {popularMovie?.title}
              </div>
              <div className="posterImage__runtime">
                {convertToReadableDate(popularMovie?.release_date)}
                <br />
                <span className="posterImage__rating">
                  {popularMovie?.vote_average}
                  <AiFillStar style={{ background: "none" }} />
                </span>
              </div>
              <div className="posterImage__desc">{popularMovie?.overview}</div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MoviePage />
    </div>
  );
};

export default Home;

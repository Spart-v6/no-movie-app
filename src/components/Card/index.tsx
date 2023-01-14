import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./style.scss";
import {motion} from "framer-motion";

const Card = (movie: any) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme>
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie?.movie?.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <motion.div className="cards">
            <img
              className="card-image"
              src={`https://image.tmdb.org/t/p/original${movie?.movie?.poster_path}`}
            />
            <div className="cards__overlay">
              <div className="card__title">{movie?.movie?.original_title}</div>
              <div className="card__runtime">
                {movie?.movie?.release_date}
                <span className="card__rating">
                  {movie?.movie?.vote_average}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {movie?.movie?.overview.slice(0, 118) + "..."}
              </div>
            </div>
          </motion.div>
        </Link>
      )}
    </>
  );
};

export default Card;
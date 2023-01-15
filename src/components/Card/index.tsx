import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import ContentLoader from 'react-content-loader'
import { AiFillStar } from "react-icons/ai";

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
          <ContentLoader 
              speed={2}
              width={200}
              height={300}
              viewBox="0 0 200 300"
              backgroundColor="#3a3a3a"
              foregroundColor="#161616"
            >
               <rect x="-7" y="-12" rx="3" ry="3" width="213" height="332" />
            </ContentLoader>
        </div>
      ) : (
        <Link to={`/movie/${movie?.movie?.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="cards">
            <img className="card-image" src={`https://image.tmdb.org/t/p/original${movie?.movie?.poster_path}`} />
            <div className="cards__overlay">
              <div className="card__title">{movie?.movie?.original_title}</div>
              <div className="card__runtime">
                {movie?.movie?.release_date}
                <span className="card__rating">
                  {movie?.movie?.vote_average}
                  <AiFillStar style={{background:"none"}}/>
                </span>
              </div>
              <div className="card__description">
                {movie?.movie?.overview.slice(0, 110) + "..."}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;

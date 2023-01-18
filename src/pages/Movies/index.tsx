import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { AiFillStar } from "react-icons/ai";
import {
    API_KEY,
    convertMinutes,
    convertToReadableDate,
    getDecimalsWithoutRounding,
} from "../../common/everything";
import { movieDetails } from "../../common";

const Movies = () => {
    const [detailedMovies, setDetailedMovies] = React.useState<movieDetails>();
    console.log(detailedMovies);

    const { id } = useParams();

    React.useEffect(() => {
        getMovieDetailedPage();
        window.scrollTo(0,0);
    }, [id]);

    const getMovieDetailedPage = () => {
        axios
        .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => setDetailedMovies(res.data))
        .catch((err) => console.log(err));
    };

  return (
    <div className="movie-page">
        <div className="movie-picture">
            <img src={`https://image.tmdb.org/t/p/original${detailedMovies?.backdrop_path}`} alt="Unable to load image"/>
        </div>
        <div className="movie-details">
            <div className="movie-left">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/original${detailedMovies?.poster_path}`} alt="Unable to load image"/>
                </div>
            </div>
            <div className="movie-right">
                <div className="movie-highlights">
                    <div className="movie-title"> 
                        <p> {detailedMovies?.title} </p>
                    </div>
                    <div className="movie-in-general">
                        <div className="movie-tagline"> {detailedMovies?.tagline} </div>
                        <div className="movie-vote"> 
                            {getDecimalsWithoutRounding(detailedMovies?.vote_average as string,1)} 
                            <AiFillStar style={{background:"none"}}/> 
                        </div>
                        <div className="movie-runtime"> {convertMinutes(detailedMovies?.runtime as number)} </div>
                        <div className="movie-release"> 
                            <span style={{background:"none"}}>
                                {
                                    detailedMovies?.release_date &&
                                    `Released on ${convertToReadableDate(detailedMovies?.release_date as string)} `
                                }
                            </span>
                        </div>
                    </div>
                    <div className="movie-genres">
                        {
                            detailedMovies?.genres.map(genre => (
                                <span className="genre">
                                    {genre?.name}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className="movie-summary">
                    <p>Summary</p>
                    <span> {detailedMovies?.overview} </span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Movies;

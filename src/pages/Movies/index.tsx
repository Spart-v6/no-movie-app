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

interface GeneresArray {
    name: string;
}

interface ProductionCompaniesArray {
    name: string;
    logo_path: string;
}

type movieDetails = {
    backdrop_path: string;
    genres: Array<GeneresArray>;
    homepage: string;
    original_title: string;
    overview: string
    poster_path: string
    production_companies: Array<ProductionCompaniesArray>;
    release_date: string
    runtime: number
    tagline: string
    vote_average: string
}

const Movies = () => {
    const [detailedMovies, setDetailedMovies] = React.useState<movieDetails>();

    const { id } = useParams();

    React.useEffect(() => {
        getMovieDetailedPage();
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
            <img src={`https://image.tmdb.org/t/p/original${detailedMovies?.backdrop_path}`}/>
        </div>
        <div className="movie-details">
            <div className="movie-left">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/original${detailedMovies?.poster_path}`}/>
                </div>
            </div>
            <div className="movie-right">
                <div className="movie-highlights">
                    <div className="movie-title"> 
                        <p> {detailedMovies?.original_title} </p>
                    </div>
                    <div className="movie-in-general">
                        <div className="movie-tagline"> {detailedMovies?.tagline} </div>
                        <div className="movie-vote"> {getDecimalsWithoutRounding(detailedMovies?.vote_average as string,1)} 
                            <AiFillStar style={{background:"none"}}/> 
                        </div>
                        <div className="movie-runtime"> {convertMinutes(detailedMovies?.runtime as number)} </div>
                        <div className="movie-release"> Released on {convertToReadableDate(detailedMovies?.release_date as string)} </div>
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

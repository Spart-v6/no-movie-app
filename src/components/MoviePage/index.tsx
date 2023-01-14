import React from 'react';
import Card from '../Card';
import axios from 'axios';
import "./style.scss";
import { useParams } from 'react-router-dom';
const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";

const MoviePage = () => {

    const [moviesList, setMoviesList] = React.useState([]);
    const {type} = useParams();

    React.useEffect(() => {
        getMovies();
    },[])

    React.useEffect(() => {
        getMovies();
    },[type])

    const getMovies = () => {
        axios
        .get(
          `https://api.themoviedb.org/3/movie/${type ? type: "popular"}?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => setMoviesList(res.data.results))
        .catch((err) => console.error(err));
    }

    return (
        <div className="movies-list">
            <h2>{(type ? type: "popular").toUpperCase()}</h2>
            <div>
                {
                    moviesList.map((m) => <Card movie={m}/> )
                }
            </div>

        </div>
    )
}

export default MoviePage
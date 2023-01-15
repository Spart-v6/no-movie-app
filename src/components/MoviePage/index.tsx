import React from 'react';
import Card from '../Card';
import axios from 'axios';
import "./style.scss";
import { useParams } from 'react-router-dom';
import {FiExternalLink} from "react-icons/fi"
import { Link } from 'react-router-dom';
import { API_KEY } from '../../common/everything';

const MoviePage = () => {
    const [moviesList, setMoviesList] = React.useState([]);
    const [popularMovies, setPopularMovies] = React.useState([]);
    const [topRatedMovies, setTopRatedMovies] = React.useState([]);
    const [upcomingMovies, setUpcomingMovies] = React.useState([]);

    const { type } = useParams();

    React.useEffect(() => getMovies(),[])
    React.useEffect(() => getMovies(),[type])

    const getMovies = () => {
        if(type === undefined){
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
            .then((res) => setPopularMovies(res.data.results))
            .catch((err) => console.error(err));
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
            .then((res) => setTopRatedMovies(res.data.results))
            .catch((err) => console.error(err));
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`)
            .then((res) => setUpcomingMovies(res.data.results))
            .catch((err) => console.error(err));
        }
        else{
            axios.get(`https://api.themoviedb.org/3/movie/${type && type}?api_key=${API_KEY}&language=en-US`)
            .then((res) => setMoviesList(res.data.results))
            .catch((err) => console.error(err));
        }
    }

    const getTitles = (type: string | undefined) => { 
        if(type && type === "top_rated") return "Top Rated";
        if(type && type === "upcoming") return "Upcoming Titles";
        else return "Popular Titles";
    }

    return (
        <div className="movies-list">
            {
                type === undefined 
                ? 
                <>
                    <div className="undefined-movies-map">
                        <div style={{display:"flex", justifyContent:'center', alignItems:'center', gap:"1rem"}}>
                            <p>Popular Titles</p>
                            <Link
                                to="/movies/popular"
                                style={{ textDecoration: "none", color: "white", display: "flex" }}
                            >
                                <FiExternalLink style={{color:"white"}}/>
                            </Link>
                        </div>
                        <div> { popularMovies.slice(0,6).map((m) => <Card movie={m}/> ) } </div>
                    </div>
                    <div className="undefined-movies-map">
                    <div style={{display:"flex", justifyContent:'center', alignItems:'center', gap:"1rem"}}>
                            <p>Top Rated movies</p>
                            <Link
                                to="/movies/top_rated"
                                style={{ textDecoration: "none", color: "white", display: "flex" }}
                            >
                                <FiExternalLink style={{color:"white"}}/>
                            </Link>
                        </div>
                        <div> { topRatedMovies.slice(0,6).map((m) => <Card movie={m}/> ) } </div>
                    </div>
                    <div className="undefined-movies-map">
                    <div style={{display:"flex", justifyContent:'center', alignItems:'center', gap:"1rem"}}>
                            <p>Upcoming Movies</p>
                            <Link
                                to="/movies/upcoming"
                                style={{ textDecoration: "none", color: "white", display: "flex" }}
                            >
                                <FiExternalLink style={{color:"white"}}/>
                            </Link>
                        </div>
                        <div> { upcomingMovies.slice(0,6).map((m) => <Card movie={m}/> ) } </div>
                    </div>
                </>
                :
                <>
                    <h2>{getTitles(type)}</h2>
                    <div className="movies-map">
                        { moviesList.map((m) => <Card movie={m}/> ) }
                    </div>
                </>
            }
        </div>
    )
}

export default MoviePage
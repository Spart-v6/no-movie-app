import React from 'react';
import "./style.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import API_KEY from "../../common/apiKey";

const Search = () => {
    const [searchResults, setSearchResults] = React.useState([]);
    const {search} = useParams();

    React.useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=true`)
        .then(res => setSearchResults(res.data.results))
        .catch(err => console.log(err));
    },[search])

    return (
        <div className="search">
            <div className="search-results">
                {
                    !searchResults?.length
                    ?
                    <>
                        <div>
                            <span style={{fontSize:"2em"}}> Nothing found for {search}. </span>
                        </div>
                    </>
                    :
                    <>
                        <span style={{fontSize:"2em", margin: "0em 0.3em"}}> Showing results for {search} </span>
                        <div>
                            { searchResults.map(m => <Card movie={m}/>) }
                        </div>
                    </>
                    
                }
            </div>
        </div>
    )
}
export default Search
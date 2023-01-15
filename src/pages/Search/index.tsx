import React from 'react';
import "./style.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../../common/everything';
import Card from '../../components/Card';

const Search = () => {
    const [searchResults, setSearchResults] = React.useState([]);
    const {search} = useParams();

    React.useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=true`)
        .then(res => setSearchResults(res.data.results))
        .catch(err => console.log(err));
    },[search])
    
    console.log(searchResults);
    

    return (
        <div className="search">
            <div className="search-results">
                {
                    !searchResults?.length
                    ?
                    <>
                        <div>
                            <span> Nothing found for {search}. <br/> Kindly adjust your search </span>
                        </div>
                    </>
                    :
                    <>
                        <span> Showing results for {search} </span>
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
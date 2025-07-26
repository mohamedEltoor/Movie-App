import './Add.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import ResultCard from './ResultCard.js';
const Add = () =>{
    const [searchValue , setSearchValue] = useState("");
    const [movies , setMovies] = useState([]);
    useEffect(()=>{
    axios
        .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=979d3c07`)    
        .then((response)=>{
         if(response.data.Search){
          setMovies(response.data.Search);
         }
     })
         .catch((error) => console.log(error));
    },[searchValue])
    return<div className="add-page">
    <div className="container">
    <div className="add-content">
    <div className="input-wrapper">
    <input
    type="text"
    placeholder="Search for a movie"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    />
    </div>
 {
  movies.length > 0 && <ul className="results">
  {movies.map((movie)=> (<li key={movie.imdbID}>
   {<ResultCard movie={movie}/>}
   </li>))}
    </ul>
  
 }
    </div>
    </div>
    </div>
}

export default Add;


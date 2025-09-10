import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import ThemeToggle from './ThemeToggle';


const BASE_URL = process.env.REACT_APP_MOVIE_API_URL;
    

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const url = `${BASE_URL}&s=${(title)}`;
        console.log("URL:", url);
        const response = await fetch(url);

        const data = await response.json();
        setMovies(data.Search || []);
    };

    useEffect(() => {
        searchMovies("2024");
    }, []);

    return (
        <div className="app">
            <h1
                onClick={() => searchMovies("2024")} 
                style={{ cursor: "pointer" }}
            >
                MovieLand
            </h1>
            <ThemeToggle />
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map(movie => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;

import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import ThemeToggle from './ThemeToggle';
import SideBar from './SideBar';

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


    const handleNavigation = (category) => {
        switch (category) {
          case "home":
            searchMovies("2024");
            break;
          case "trending":
            searchMovies("trending");
            break;
          case "top":
            searchMovies("top rated");
            break;
          case "upcoming":
            searchMovies("upcoming");
            break;
          case "favorites":
            searchMovies("upcoming");
            break;
          case "2024":
            searchMovies("2024");
            break;
          case "marvel":
            searchMovies("marvel");
            break;
          case "oscars":
            searchMovies("oscars");
            break;
          default:
            break;
        }
    };
    
    useEffect(() => {
        searchMovies("2024");
    }, []);

    return (
        <div className="layout">
          {/* Left Column */}
            <SideBar onNavigate={handleNavigation} />
      
          {/* Main Content */}
          <main className="app">
            <h1 onClick={() => searchMovies("2024")} style={{ cursor: "pointer" }}>
              MovieLand
            </h1>
            <ThemeToggle />
            <div className="search">
              <input 
                type="text" 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchMovies(searchTerm)}
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
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
              )}
          </main>
        </div>
      );      
}

export default App;

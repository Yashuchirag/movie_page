import {useEffect} from 'react';

const BASE_URL = process.env.REACT_APP_MOVIE_API_URL;

const App = () => {

    const searchMovies = async (title) => {
        try {
            const url = `${BASE_URL}&s=${(title)}`;
            console.log("URL:", url);
            const response = await fetch(url);
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
      
            const data = await response.json();
            console.log("Movie data:", data.Search);
        } catch (err) {
            console.error("Failed to fetch movies:", err);
        }
    };
    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div>
            <h1>Movie Page</h1>
        </div>
    );
}

export default App;

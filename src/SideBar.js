import './App.css';
import ThemeToggle from './ThemeToggle';

const SideBar = ({onNavigate}) => {

    return (
        <aside className="sidebar">
            {/* Navigation Menu */}
            <h4 className="section-title">Navigation</h4>
            <ul className="sidebar-menu">
                <li onClick={() => onNavigate("home")}>🏠 Home</li>
                <li onClick={() => onNavigate("trending")}>🔥 Trending</li>
                <li onClick={() => onNavigate("top")}>⭐ Top Rated</li>
                <li onClick={() => onNavigate("upcoming")}>🎬 Upcoming</li>
                <li onClick={() => onNavigate("favorites")}>❤️ Favorites</li>
            </ul>

            {/* Filters */}
            <h4 className="section-title">Filters</h4>
            <div className="filters">
                <select>
                <option>Genre</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Horror</option>
                </select>
                <select>
                <option>Year</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                </select>
                <select>
                <option>Rating</option>
                <option>8+</option>
                <option>7+</option>
                <option>6+</option>
                </select>
            </div>

            {/* Watchlist */}
            <h4 className="section-title">Watchlist</h4>
            <ul className="watchlist">
                <li>Inception</li>
                <li>Avengers: Endgame</li>
                <li>The Dark Knight</li>
            </ul>


            {/* Theme & Settings */}
            <h4 className="section-title">Settings</h4>
                <ThemeToggle />
                <select>
                    <option>Font Size: Medium</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <select>
                    <option>Language: EN</option>
                    <option>FR</option>
                    <option>ES</option>
                </select>

            {/* Search Shortcuts */}
            <h4 className="section-title">Shortcuts</h4>
            <ul className="shortcuts">
                <li onClick={() => onNavigate("2024")}>📅 2024</li>
                <li onClick={() => onNavigate("marvel")}>🦸 Marvel</li>
                <li onClick={() => onNavigate("oscars")}>🏆 Oscars</li>
            </ul>
    </aside>
    );
};

export default SideBar;
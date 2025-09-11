import './App.css';

const SideBar = ({onNavigate}) => {

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">MovieLand</h2>
            <ul className="sidebar-menu">
                <li onClick={() => onNavigate("home")}>Home</li>
                <li onClick={() => onNavigate("trending")}>Trending</li>
                <li onClick={() => onNavigate("top")}>Top Rated</li>
                <li onClick={() => onNavigate("upcoming")}>Upcoming</li>
                <li onClick={() => onNavigate("favorites")}>Favorites</li>
            </ul>
        </aside>
    );
};

export default SideBar;
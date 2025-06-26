import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { setIsSearching, setMovies, getPopularMovies, searchMovies, setQuery } = useContext(MovieContext);

  const handleSearch = async (query) => {
    if (!query) {
      setIsSearching(false);
      setMovies([]);
      getPopularMovies(1);
      return;
    }
    setIsSearching(true);
    setQuery('');
    const results = await searchMovies(query);
    setMovies(results);
  }
  return (
    <div className="w-full h-14 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-800 shadow z-40 top-0 fixed">
      <div className="w-10/12 mx-auto h-full flex items-center justify-between">
        <p className="text-gray-950 dark:text-gray-50 font-normal text-lg"><Link to='/'>Moviner</Link></p>
        <SearchBar onSearch={handleSearch}/>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
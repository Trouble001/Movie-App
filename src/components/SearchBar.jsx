import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const SearchBar = ({ onSearch }) => {
  const { query, setQuery } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <div className="w-full bg-inherit ml-4 mr-4">
      <form className="w-full h-auto flex items-center flex-row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-10/12 py-1 px-4 text-gray-800 dark:text-gray-300 rounded outline-0 focus:outline-0 border-0"
        />
        <button className="w-2/12 py-1 px-4 text-gray-800 dark:text-gray-300 cursor-pointer" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;

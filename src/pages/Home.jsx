import { useContext, useEffect } from "react";
import Card from "../components/Card";
import { MovieContext } from "../context/movieContext";
import Loader from "../components/Loader";

const Home = () => {
  const { getPopularMovies, movies, page, setPage, setMovies, loading } = useContext(MovieContext)

useEffect(() => {
  fetchPopularMovies(1);
}, []);

  const fetchPopularMovies = async (pageNum) => {
    const newMovies = await getPopularMovies(pageNum);
      
    setMovies((prevMovies) => {
    const movieMap = new Map();

    // Add existing movies
    prevMovies.forEach((movie) => movieMap.set(movie.id, movie));

    // Add new movies only if not already in the map
    newMovies.forEach((movie) => {
      if (!movieMap.has(movie.id)) {
        movieMap.set(movie.id, movie);
      }
    });
      return Array.from(movieMap.values());
    });
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPopularMovies(nextPage);
  }

  return (
    <div className="w-full h-auto bg-white dark:bg-gray-950 z-0 pt-16 sm:pt-18 lg:pt-20 pb-8 px-2 md:px-4 lg:px-4 xl:px-6">
      {loading && <Loader />}
      <div className="h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="w-full h-auto mt-6 flex items-center justify-center">
          <button onClick={handleLoadMore} className="py-1 px-4 rounded shadow text-gray-950 dark:text-gray-50 bg-inherit cursor-pointer">{loading ? 'Loading...' : 'Load More'}</button>
        </div>
    </div>
  );
}

export default  Home;
import { createContext, useState, useCallback } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);


  // Fetch Popular Movies
  const getPopularMovies = useCallback(async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
          page,
          append_to_response: 'videos,credits',
        }
      });
      console.log(res.data.results);
      // setMovies(res.data.results);
      return res.data.results;
    } catch(error) {
      console.error(error);
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Search Movie
  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
          append_to_response: 'videos,credits',
        },
      });
      return res.data.results;
    } catch (error) {
      console.error(error?.message || error);
      setError("Couldn't find movies. Please try again.");
    } finally {
      setLoading(false);
    };
  };

  // Get Movie Details
  const getMovieDetails = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          append_to_response: 'videos,credits',
        }
      });
      setMovieDetails(res.data);
    } catch (error) {
      console.error(error?.message || error);
      setError("Failed to get movie details. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies, getPopularMovies, page, setPage, getMovieDetails, movieDetails, isSearching, setIsSearching, searchMovies, query, setQuery, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};
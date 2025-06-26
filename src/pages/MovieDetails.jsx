import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import DetailCard from "../components/DetailCard";
import Loader from "../components/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails, movieDetails, loading } = useContext(MovieContext);

  useEffect(() => {
    getMovieDetails(id);
  }, [id, getMovieDetails]);

  if (!movieDetails) return <p>Sorry. Movie details not available!</p>;

  return (
    <div className="w-full h-screen dark:bg-gray-950">
      {loading && <Loader />}
      <DetailCard movieDetails={movieDetails} />
    </div>
  );
}

export default MovieDetails;
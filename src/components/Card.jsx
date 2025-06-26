import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <div className="w-auto h-full shadow border border-gray-300 dark:border-gray-800 rounded">
      <Link to={`/movie/${movie.id}`}>
        <div className="w-full h-auto">
          <img className="w-full shadow rounded-t" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="w-full h-auto p-3 flex items-start justify-center flex-col">
          <h3 className="text-sm md:text-md lg:text-md xl:text-md 2xl:text-md text-gray-950 dark:text-gray-50 font-medium">{movie.title} ({movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'})</h3>
          <p className="text-sm md:text-md lg:text-md xl:text-md 2xl:text-md text-gray-800 dark:text-gray-300 flex items-center">Rating: {movie.vote_average} <StarIcon className="h-5 w-5 text-gray-800 dark:text-gray-200 ml-1" /></p>
        </div>
      </Link>
    </div>
  );
}

export default Card;


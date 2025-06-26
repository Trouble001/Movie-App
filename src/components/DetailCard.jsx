import { useEffect } from "react";
import Trailer from "./Trailer";
import Casts from "./Casts";
import { StarIcon } from "@heroicons/react/24/solid";

const DetailCard = ({ movieDetails }) => {

  useEffect(() => {
    console.log(movieDetails.credits.cast);
  }, []);

  const trailer = movieDetails.videos?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div className="w-full h-auto md:h-screen pt-16 md:pt-18 lg:pt-22 px-2 md:px-4 lg:px-10 xl:px-14 2xl:px-16 pb-8 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-950">
      <div className="w-full h-full lg:col-span-1 flex items-center">
        {movieDetails.poster_path ? (
          <img
          src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
          alt={movieDetails?.title || 'Movie Poster'}
          className="h-full w-full md:w-auto rounded shadow"
        />
        ) : (
          <p>No poster availabe</p>
        )}
      </div>

      <div className="w-full h-auto md:overflow-y-auto py-2 px-8 lg:col-span-2 border-l border-gray-300 dark:border-gray-800">
        <h1 className="text-3xl font-medium text-gray-950 dark:text-gray-50 mb-2">{movieDetails.title || "Title not available"}</h1>
        <p className="text-md font-normal text-gray-800 dark:text-gray-200"><strong>Release Date:</strong> {movieDetails.release_date}</p>
          <div className="text-md font-normal text-gray-800 dark:text-gray-200 flex items-center">
            <strong className="mr-1">Genres: </strong>
            {movieDetails.genres.map((gen, index) => (
            <span className="inline whitespace-pre-wrap" key={gen.id}>{gen.name}
            {index < movieDetails.genres.length - 1 && ', '}</span>
          ))}
          </div>
        
        <p className="text-md font-normal text-gray-800 dark:text-gray-200 flex items-center flex-row"><strong className="mr-1">Rating:</strong> {movieDetails.vote_average} <StarIcon className="h-5 w-5 text-gray-800 dark:text-gray-200 ml-1" /> </p>
        <p className="text-md text-gray-800 dark:text-gray-300"><strong>Overview:</strong> {movieDetails.overview}</p>
          
        <Casts movieDetails={movieDetails} />

        {trailer ? (
          <Trailer trailer={trailer} />
          ) : (
            <div className="w-full flex items-center justify-center mt-4">
              <p className="text-gray-800 dark:text-gray-200">No Trailer Available</p>
            </div>
          )}

      </div>
    </div>
  );
}

export default DetailCard;
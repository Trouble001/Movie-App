import React from 'react'

const Casts = ({ movieDetails }) => {
  return (
    <div className='w-full h-auto grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-4'>
      <h3 className="text-gray-900 dark:text-gray-200 text-lg font-normal col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-4 xl:col-span-5 my-2">Casts</h3>
      {movieDetails.credits.cast.map((cast, id) => (
        <div key={id} className='border border-gray-300 dark:border-gray-800 rounded-md shadow'>
          <img
            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            alt={cast.name}
            className='rounded-t-md w-full'
          />
          <div className='p-2'>
            <h5 className='text-md font-normal text-gray-800 dark:text-gray-200'>{cast.name}</h5>
            <p className='text-md font-normal text-gray-600 dark:text-gray-400'>{cast.character}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Casts;

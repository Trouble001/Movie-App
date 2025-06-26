const Trailer = ({ trailer }) => {
  return (
    <div className="w-full h-96 mt-4 flex flex-col items-center justify-center rounded">
      <h3 className="text-gray-900 dark:text-gray-200 text-lg font-normal my-2">Trailer</h3>
        <iframe
          className="w-full h-full shadow rounded"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Movie Trailer"
          allowFullScreen
        />
    </div>
  );
}

export default Trailer;

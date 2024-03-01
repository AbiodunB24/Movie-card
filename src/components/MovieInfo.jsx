// MovieDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieInfo = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail flex flex-col gap-2 mt-2">
      <Link to="/" className='text-blue-500 cursor-pointer'>Back to Home</Link>
      <h2 className='text-2xl font-semibold'>{movie.title}</h2>
      <p className='w-fit leading-8'> <span className='text-2xl font-semibold'>Description:</span> {movie.description}</p>
      <p className="text-lg "><span className='text-2xl font-semibold'>Rating:</span> {movie.rating}</p>
      <iframe
      className='lg:w-[560px] lg:h-[315px] w-[300px] h-[200px]'
        title="trailer"
        
        src={movie.videoLink}
        frameBorder="0"
        allowFullScreen
        cl
      ></iframe>
    </div>
  );
};

export default MovieInfo;

// import React from 'react'
// import Data from '../assets/data.json'

// const MovieCard = ({title, image, description, rating }) => {
  
//   return (
//     <div className=''>
   
        
//             <img className='w-[30rem] h-[30rem]' src={image} alt="" style={{width: '20rem',height: '20rem'}} />
//             <h2 className='text-2xl font-semibold'>{title}</h2>
//             <h2 className='w-fit'>{description}</h2>
//             <h2>Rating : {rating}</h2>
//             {/* <p>{Movies.description}</p>
//             <p>Rating: {zating}</p> */}
     
          
//     </div>
//   )
// }

// export default MovieCard

import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, description, images, rating } = movie;

  return (
    <div  className="container  px-2 lg:px-6 lg:m-2 lg:p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 -bottom-1 left-0 group-hover:w-full">
      <Link to={`/movie/${encodeURIComponent(movie.title)}`} className="movie-card block w-full">
      <div className="card ">
      <img src={images} alt={title} className='w-[100%] h-[100%]   object-fill object-center cursor-pointer' />
      <div className="content hidden lg:flex lg:flex-col  lg:text-black ">
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='w-fit'><span className="text-lg font-semibold">Description:</span> {description}</p>
      <p className=""><span className="font-semibold text-lg">Rating: </span>{rating}</p>
      </div>
      
      </div>
      </Link>
      
    </div>
  );
};

export default MovieCard;
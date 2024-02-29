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

const MovieCard = ({ movie }) => {
  const { title, description, images, rating } = movie;

  return (
    <div  className="movie-card">
      <img src={images} alt={title} className='w-[20rem] h-[20rem] cursor-pointer' />
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <p className='w-fit'>{description}</p>
      <p className="text-lg ">Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
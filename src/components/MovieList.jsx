// import React from "react";
// import Moviecard from "./MovieCard";
// import Data from "../assets/data.json";

// const MovieList = ({movies}) => {
//   return (
//     <div className="movie-list   grid grid-cols-2 gap-8">
//       {movies.map((movie) => (
//         // <MovieCard key={movie.title} movie={movie} />
//         <Moviecard
//           image={movie.images}
//           description={movie.description}
//           title={movie.title}
//           rating={movie.rating}
//           key={movie.title}
//         />
//       ))}
//     </div>
//   );
// };

// export default MovieList;

import React from 'react';
import Moviecard from './MovieCard';
import Filter from './Filter';



const MovieList = ({ movies }) => {
  
  return (
    <div className="movie-list   grid md:grid-cols-3 lg:grid-cols-4 gap-8 grid-cols-2">
      {movies.map((movie) => (
        // <MovieCard key={movie.title} movie={movie} />
        <Moviecard key={movie.title} movie={movie}/>
      ))}
     
    </div>
  );
};

export default MovieList;

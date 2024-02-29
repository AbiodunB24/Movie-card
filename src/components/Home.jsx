/* eslint-disable react/prop-types */

import Filter from "./Filter"
import MovieList from "./MovieList"

function Home({ handleFilter , movies, }) {
  return (
    <div className="flex flex-col gap-5">
        <Filter  handleFilter={handleFilter} />
        <MovieList  movies={movies}/>

        
    </div>
  )
}


export default Home
/* eslint-disable react/prop-types */

import AddNewMovie from "./AddNewMovie"
import Filter from "./Filter"
import MovieList from "./MovieList"

function Home({ handleFilter , movies, }) {
  return (
    <div className="flex flex-col gap-5">
       <h1 className='uppercase text-2xl text-center'> Movie List</h1>
        <Filter  handleFilter={handleFilter} />
        <MovieList  movies={movies}/>
        <AddNewMovie/>
        
    </div>
  )
}


export default Home
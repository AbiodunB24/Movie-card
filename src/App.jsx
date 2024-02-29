import { useState } from 'react';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'


const App = () => {
  const [movies, setMovies] = useState([
    {
    "title": "Extraction 2",
    "description": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
    "images": "../images/extraction.webp",
    "rating": 5
  },
  { 
    "title": "The Flash",
    "description":
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    "images": "../images/flash.webp",
    "rating": 6
  },
  {
    "title": "Guardians of the Galaxy Volume 3",
    "description":
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "images": "../images/guardians.webp",
    "rating": 2
  },
  {
    "title": "Transformers: Rise of the Beasts",
    "description":
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "images": "../images/transformer.webp",
    "rating": 9
  }
])
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filterType, filterValue) => {
    let filtered = movies;

    if (filterType === 'title') {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === 'rating') {
      filtered = movies.filter((movie) => movie.rating >= filterValue);
    }

    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(formData);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };
  return (
    <div>
      <h1 className='uppercase text-3xl text-center'>My Movie List</h1>
      <Filter handleFilter={handleFilter}/>
      <MovieList movies={filteredMovies}/>
      
      <form onSubmit={handleSubmit} className='bg-slate-500 flex flex-col'>
      <h2 className='uppercase text-2xl'>Add a New Movie</h2>
      <label>
          Title:
          <input
          
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="posterURL"
            value={formData.images}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button className='bg-blue-500 w-fit ml-10 rounded-md' type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default App
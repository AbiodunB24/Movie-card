import { useState } from 'react';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';


const App = () => {
  const [movies, setMovies] = useState([
    {
    "title": "Extraction 2",
    "description": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
    "images": "../images/extraction.webp",
    "rating": 5,
    "videoLink": "https://www.youtube.com/embed/mO0OuR26IZM"
  },
  { 
    "title": "The Flash",
    "description":
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    "images": "../images/flash.webp",
    "rating": 6,
    "videoLink": "https://www.youtube.com/embed/hebWYacbdvc"
  },
  {
    "title": "Guardians of the Galaxy Volume 3",
    "description":
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "images": "../images/guardians.webp",
    "rating": 2,
    "videoLink": "https://www.youtube.com/embed/u3V5KDHRQvk"
  },
  {
    "title": "Transformers: Rise of the Beasts",
    "description":
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "images": "../images/transformer.webp",
    "rating": 9,
    "videoLink": "https://www.youtube.com/embed/itnqEauWQZM"
  },
  {
    "title": "Inception",
    "description": "Inception is a mind-bending thriller directed by Christopher Nolan, where a thief enters the dreams of others to steal their secrets.",
    "images": "../images/inception.jpeg",
    "rating": 8.8,
    "videoLink": "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    "title": "The Shawshank Redemption",
    "description": "The Shawshank Redemption is a powerful drama directed by Frank Darabont, following the story of a banker wrongly convicted of murder.",
    "images": "../images/shawshank_redemption.jpeg",
    "rating": 9.3,
    "videoLink": "https://www.youtube.com/embed/NmzuHjWmXO"
  },
  {
    "title": "The Dark Knight",
    "description": "The Dark Knight is a gripping superhero film directed by Christopher Nolan, featuring Batman's battle against the Joker.",
    "images": "../images/the_dark_knight.webp",
    "rating": 9.0,
    "videoLink": "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    "title": "Interstellar",
    "description": "Interstellar is a visually stunning science fiction film directed by Christopher Nolan, exploring space travel and the survival of humanity.",
    "images": "../images/interstellar.jpeg",
    "rating": 8.6,
    "videoLink": "https://www.youtube.com/embed/zSWdZVtXT7E"
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
    <div >
       
      {/* <Filter handleFilter={handleFilter}/> */}
      <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<Home handleFilter={handleFilter} movies={filteredMovies}/>} />
      <Route path="/movie/:title" element={<MovieInfo movies={movies}/>}/>
      </Routes>
      
      
      <div className='flex lg:items-center lg:justify-center'>
<form onSubmit={handleSubmit} className='bg-slate-500 px-4 flex flex-col'>
      <h2 className='uppercase mb-3 text-2xl'>Add a New Movie</h2>
      <label>
          Title:
          <input
          
          className='bg-slate-200 w-full'
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
          className='bg-slate-200 w-full'
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
          className='bg-slate-200 w-full'
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
          className='bg-slate-200 w-full'
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
        <button className='bg-blue-500 w-fit ml-10 p-2 cursor-pointer rounded-md' type="submit">Add Movie</button>
      </form>
    </div>
    </div>
  )
}

export default App
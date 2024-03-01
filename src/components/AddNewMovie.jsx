import React, { useState } from 'react'

const AddNewMovie = ({movies}) => {
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
    <div className='flex items-center justify-center'>
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
    
  )
}

export default AddNewMovie
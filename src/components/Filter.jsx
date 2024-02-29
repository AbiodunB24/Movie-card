import React from "react";


const Filter = ({ handleFilter }) => {
  const handleTitleChange = (event) => {
    handleFilter("title", event.target.value);
  };

  const handleRatingChange = (event) => {
    handleFilter("rating", event.target.value);
  };

  return (
    <div className="filter flex gap-8 ">
        <h1>Filter:</h1>
      <input
      className=" placeholder:pl-4 rounded-xl bg-slate-50 border-2 border-black "
        type="text"
        placeholder="By Title"
        onChange={handleTitleChange}
        
      />
      <input
      className=" placeholder:pl-2 rounded-xl w-[6rem] bg-slate-50 border-2 border-black"
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="By rating"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;

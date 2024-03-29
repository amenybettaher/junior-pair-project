import React, { useState } from 'react';


function Search({ handleSearch ,set}) {
  const [searchTerm, setSearchTerm] = useState('');
  console.log("searchTerm",searchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
set(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search by name" />
        <button type="submit" className="button-50">Search</button>
      </form>
    </div>
  );
}

export default Search;

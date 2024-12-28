import React from 'react';
import './SearchBox.scss';

function SearchBox() {
  return (
    <div className='search-box'>
      <button className="search-button">
        <img src="/assets/search.svg" alt="Icon search" />
      </button>
      <input type="text" placeholder="Search to order number" />
    </div>
  );
}

export default SearchBox;
import React from 'react';
import './SearchBox.scss';
import Image from '../Image/Image';


const SearchBox = () => {
  return (
    <div className='search-box'>
      <button className="search-button">
        <Image src="assets/search.svg" alt="Icon search" />
      </button>
      <input type="text" placeholder="Search to order number" />
    </div>
  );
}

export default SearchBox;
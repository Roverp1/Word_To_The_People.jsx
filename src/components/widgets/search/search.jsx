import { Link } from 'react-router';

import './search.css'

const Search = () => {

  const handleMouseOver = () => {
    const searchInput = document.querySelector(".search__input") 
    searchInput.classList.add("search__input-hover");
  }

  const handleMouseOut = () => {
    const searchInput = document.querySelector(".search__input") 
    searchInput.classList.remove("search__input-hover");
  }

  return (
    <>
      <section className='search search__section'>
        <div className='search__wraper container'>
          <input type='text' className='search__input' placeholder='Search'/>

          <Link to={"/word/"}>
          <span className='search__span'>
            <svg id="search-id" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M32.4,26.2l8.1,8.1c1.7,1.7,1.7,4.5,0,6.2l0,0c-1.7,1.7-4.5,1.7-6.2,0L30,36.2"></path>
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M8,25c-1.8-4.7-0.8-10.2,3-14c3.8-3.8,9.5-4.8,14.2-2.9"></path>
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M31.3,13.1c3.4,5.1,2.8,12.1-1.7,16.6c-4.9,4.9-12.6,5.1-17.7,0.8"></path>
            </svg>
          </span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Search

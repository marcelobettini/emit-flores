/* eslint-disable react/prop-types */
import { useRef } from "react";

function Search({ onSearchData }) {
  const inputSearch = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchData(inputSearch.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input ref={inputSearch} type="search" id="title" required name="search" />
      <input type="submit" value="buscar" />
    </form>);
}

export default Search;
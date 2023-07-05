import { useState } from "react";
import Search from "./components/Search";
import MediaList from "./components/MediaList";
const URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=88395455&s=';
function App() {

  const [media, setMedia] = useState([]);
  const [error, setError] = useState(null);



  const getData = (query) => {
    setError(null);
    fetch(`${URL}${query}`)
      .then(res => res.json())
      .then(json => {
        setMedia(json.Search);
      })
      .catch(err => {
        console.log("en el catch");
        console.error(err);
        setError(err.message);
      });
  };



  return (
    <>
      <header><h1>Media Finder</h1></header>
      <Search onSearchData={(query) => getData(query)} />
      {error ? (<h2>{error}</h2>) : (<MediaList media={media} error={error} />)}



    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import SearchCharacters from "./components/SearchCharacters";

function App() {
  const urlApi = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState([]);
  const [filterText, setFilter] = useState("");

  const handleFilterChange = (text) => {
    setFilter(text);
  };

  const filterCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const onPrevius = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  const fetchCharacters = (urlApi) => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(urlApi);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App"></Navbar>
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        ></Pagination>
        <SearchCharacters
          onFilterChange={handleFilterChange}
        ></SearchCharacters>
        <Characters characters={filterCharacters}></Characters>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        ></Pagination>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import moment from "moment";
import Details from "./Details";

const Characters = ({ characters = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);

  const toggleModal = (index) => {
    setShowModal(!showModal);
    setSelectedCharacterIndex(index);
  };

  const dateFormat = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
    <div className="row row-cols-4">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card h-100">
            <img src={item.image} alt=""></img>
            <div className="card-body">
              <h5 className="card-title fw-bold">{item.name}</h5>
              <hr></hr>
              <p className="fst-italic">Gender: {item.gender}</p>
              <p>Status: {item.status}</p>
              <p>Creation date: {dateFormat(item.created)}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => toggleModal(index)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
      <Details
        character={characters[selectedCharacterIndex]}
        showModal={showModal}
        toggleModal={toggleModal}
      ></Details>
    </div>
  );
};

export default Characters;

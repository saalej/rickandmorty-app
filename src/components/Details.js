import React from "react";
import moment from "moment";

function Details({ character, showModal, toggleModal }) {
  const dateFormat = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
          onClick={toggleModal}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{character.name}</h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>

              <div className="modal-body mb-4" style={{ minHeight: "200px" }}>
                <div className="row">
                  <div className="col-md-6">
                    <img src={character.image} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Gender:</strong> {character.gender}
                    </p>
                    <p>
                      <strong>Species:</strong> {character.species}
                    </p>
                    <p>
                      <strong>Origin:</strong> {character.origin.name}
                    </p>
                    <p>
                      <strong>Status:</strong> {character.status}
                    </p>
                    <p>
                      <strong>Creation Date:</strong>{" "}
                      {dateFormat(character.created)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

export default Details;

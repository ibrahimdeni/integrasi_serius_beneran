import React from "react";
import TvShowscontainerAdm from "../components/TvShowsContainerAdm";
import bgHero from '../images/la-casa-de-papel-logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const AddFilmList = () => {
  return (
    <>
      {/* <div>
        <div className="background-hero-tv container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
            <img className="object-fit" src={bgHero}/>
            <p className="">
            This original Netflix series, originally titled La Casa de Papel, follows the Professor (Álvaro Morte), a criminal mastermind who brings eight thieves together to take hostages.
            </p>
            <div className="mb-4">
              <span>2019</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                TV Series
              </button>
            </div>
            <div>
              <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                WATCH NOW!
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div style={{backgroundColor:"black", marginTop:"10vh"}}>
        <div>
          <div className="d-flex">
            <h3 style={{ marginLeft: "8vw"}}>List Film</h3>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className="ms-5 border">
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Movies</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Short Movies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex justify-content-end me-5" style={{ width: '65%'}}>
              <Button href="/add-film" variant="danger" className="pe-4 ps-4">Add Film</Button>{' '}
            </div>
          </div>
          <TvShowscontainerAdm />
        </div>
      </div>
      {/* <SeriesContainer /> */}
    </>
  );
};

export default AddFilmList;

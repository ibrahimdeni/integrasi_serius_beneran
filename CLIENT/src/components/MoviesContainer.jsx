import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MoviesList from './MoviesList'
import dataMovies from '../dataDummy/MoviesData'
console.log(dataMovies)

function MoviesContainer() {

  return (
    <div>
      <Container className="overflow-hidden" id="" >
        <h3 className="text-light mt-4 mb-3">Movies</h3>
        <Row>
          {dataMovies.map((movies, index) => {
            return(
              <Col md={2} key={index}>
                  <MoviesList 
                    movieImg={movies.movieImg}
                    title={movies.title}
                    year={movies.year}
                  />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MoviesContainer;

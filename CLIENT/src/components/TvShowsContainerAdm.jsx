import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TvShowsListAdm from './TvShowsListAdm';
import data from '../dataDummy/TvShowsData'
import {Link} from 'react-router-dom'


function SeriesContainerAdm() {
    
  return (
    <div >
      <Container className="overflow-hidden" id="" >
        <h3 className="text-light mt-4 mb-3">TV Series</h3>
        <Row>
          {data.map((data, index) => {
            return(
                <Col md={2} key={index}>
                    <TvShowsListAdm 
                        seriesImg={data.seriesImg}
                        title={data.title}
                        year={data.year}
                    /> {/* Looping */}
                </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SeriesContainerAdm;
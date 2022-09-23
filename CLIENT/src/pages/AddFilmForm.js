import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/style.css'
import Images from '../assets/Icons/icons'
import { useState, useEffect } from 'react';


const style = {
  textArea: {
    height: '100px',
    resize: 'none',
  },
}

const AddFilm = () => {

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [ arr, setArr ] = useState(inputArr);
  
  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        }
      ];
    });
  }

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  return (  

    <>
    <div className="formContainer ps-5 pe-5 pt-2">
      <h4 className='addFilmTitle text-white mt-3 mb-4'>Add Film</h4>
      <Form className="ms-5 me-5 mb-5 mt-3 ps-5 pe-5 filmForm">
        <fieldset>
          <Form.Group className="mb-2 d-flex">
            <Form.Control placeholder="Title" className='me-2' disable/>
              <Form.Label className="input-img d-flex justify-content-between">
                <p>
                  <span>Attach Thumbnail</span>
                </p>
                <Form.Control placeholder="Attach Thumbnail" className='addTitle ps-4' type="file" hidden/>
                <img src={Images.PaperClip} alt='' className='uploadIcon'/>
              </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Year" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select>
              <option hidden>Category</option>
              <option>Category</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="Description" className=" description text-white" style={ style.textArea }/>
          </Form.Group>
{/* 
          <Form.Group className="mb-2 d-flex mt-5">
            <Form.Control placeholder="Title Episode" className='me-2'/>
              <Form.Label className="input-img d-flex justify-content-between">
                <p>
                  <span>Attach Thumbnail</span>
                </p>
                <Form.Control placeholder="Attach Thumbnail" className='addTitle ps-4' type="file" hidden/>
                <img src={Images.PaperClip} alt='' className='uploadIcon'/>
              </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Link Film" />
          </Form.Group> */}

          <div className='mt-5'>
            {arr.map((item, i) => {
              return (
                <div>
                  <Form.Group className="mb-2 d-flex mt-4">
                  <Form.Control placeholder="Title Episode" className='me-2'/>
                    <Form.Label className="input-img d-flex justify-content-between">
                      <p>
                        <span>Attach Thumbnail</span>
                      </p>
                      <Form.Control placeholder="Attach Thumbnail" className='addTitle ps-4' type="file" hidden/>
                      <img src={Images.PaperClip} alt='' className='uploadIcon'/>
                      </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control placeholder="Link Film" />
                  </Form.Group>
                </div>
              );
            })}
            <Button onClick={addInput} className="addEpisode btn-secondary border w-100 mb-4 text-danger mt-2">+</Button>
          </div>

          <div className="d-flex justify-content-end">
            <Button type="submit" className="btn btn-danger ps-5 pe-5">Save</Button>
          </div>
        </fieldset>
      </Form>
    </div>
    </>
  )
}

export default AddFilm
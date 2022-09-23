import React, { useEffect,useState } from "react";
import witcher from '../images/witcher.png'
import inplayww from '../images/inplayww.png'
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function VideoDetail() {

  const [isLogin, setIsLogin] =useState(false)

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if(user) setIsLogin(true)
    else {
      setIsLogin(false)
      navigate('/')
    }
  }, [user])

  return (
    <>
      <div className="d-flex justify-content-center bg-dark">
        <iframe 
            width="853" 
            height="480" 
            src="https://www.youtube.com/embed/ndl1W4ltcmg" 
            title="THE WITCHER | MAIN TRAILER | NETFLIX" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        ></iframe>
      </div>

        <div className="w-100 bg-black" style={{marginTop:"-50px"}}>
            <div className="d-flex justify-content-start sectionMain mt-5 flex-column flex-md-row bg-black">
                <div className="card mt-5 mb-3 bg-black text-white" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={witcher} className="img-fluid rounded-start imgDummyDetail" alt="Series" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title fs-1">The Witcher</h5>
                        <div className="mb-4 mt-2">
                        <small className="text-muted">2013</small> 
                        <small className='border border-secondary ms-2 px-1 ms-3 py-1 rounded text-muted tv-s shadow'>TV Series</small>
                        </div>
                        <p className="card-text pDetailMain">
                            It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardEpisode mt-5">
                <img src={inplayww} alt="episode" className="imgEpisode" />
                <small className="text-light">Peaky Blinders : Episode 1</small>
            </div>
            </div>
        </div>
    </>
  );
}

export default VideoDetail;

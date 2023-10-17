import React from 'react';
import { Link  } from 'react-router-dom';
import lights from '../assets/images/lights.jpg';
import plani from '../assets/images/plani.jpg';
import siguresat from '../assets/images/siguresat.jpg';
import Siguresat from './Siguresat';





function Main() {
  return (
    <div className="cards">
      <div className="container">

       <h3 className="title" style={{justifyContent:'center', display:'flex', marginTop:'6vh',marginBottom:'4vh'}}>Our <span>works.</span></h3>
       
        <div className="row">

          <div className="card" style={{ width: '44vh',marginBottom:'1vh' ,height:'81vh',marginLeft:'1.2vh' }}>
            <img src={lights} className="card-img-top" style={{ width: '100%', height: '70%', objectFit: 'cover' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lampen-<span>Installation</span></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <Link to='./Light' className="btn btn-primary" style={{width:'60%'}}>
                check
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: '44vh', margin: '10px' }}>
            <img src={siguresat} className="card-img-top" style={{ width: '100%',height: '70%', objectFit: 'cover' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Elektro-<span>Anlagen</span></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <Link to='./Siguresat' className="btn btn-primary " style={{width:'60%'}}>
                check
              </Link>
            </div>
          </div>


          <div className="card" style={{ width: '44vh', margin: '10px' }}>
            <img src={plani} className="card-img-top" style={{ width: '100%', height: '70%', objectFit: 'cover' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pla<span>nung</span></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <Link to="./Plani"   className="btn btn-primary" style={{width:'60%'}} >
                check
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Main;

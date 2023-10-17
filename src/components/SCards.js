import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import siguresat from '../assets/images/siguresat.jpg';
import siguresat1 from '../assets/images/siguresat1.jpg';
import siguresat2 from '../assets/images/siguresat2.jpg';
import siguresat3 from '../assets/images/siguresat3.jpg';
import Siguresat5 from '../assets/images/Siguresat5.jpg';



function SCards() {
  return (
    
       <div>
        
        <section>
      <CardGroup>
      <Card className="cards mb-3 shadow-2xl shadow-inner " style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto" style={{borderRadius:'3%'}} src={siguresat} />
        <Card.Body>
          <Card.Title>Haupt<span>verteilung</span></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>


      <Card className="cards mb-3 shadow-xl" style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto" style={{borderRadius:'3%' , boxSizing:'content-box'}} src={siguresat1} />
        <Card.Body>
          <Card.Title>Unter<span>verteilung</span></Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>


      <Card className="cards mb-3 shadow-xl" style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto"style={{borderRadius:'3%'}} src={siguresat2} />
        <Card.Body>
          <Card.Title>Industrie<span>verteilung</span></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


    <CardGroup>
      <Card className="cards mb-3 shadow-xl " style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto"style={{borderRadius:'3%'}} src={siguresat3} />
        <Card.Body>
          <Card.Title>Industrie<span>verteilung</span></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>


      <Card className="cards mb-3 shadow-xl " style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto"style={{borderRadius:'3%'}} src={Siguresat5} />
        <Card.Body>
          <Card.Title>Industrie<span>verteilung</span></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card className="cards mb-3 shadow-xl " style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto" style={{borderRadius:'3%'}} src='http://www.gardnersystemsinc.com/assets/images/img-7321.jpg-2032x2709.jpg' />
        <Card.Body>
          <Card.Title>Div <span>steuerungen</span></Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


   
      </section>
    </div>
  
  )
}

export default SCards

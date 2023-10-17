import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import plani1 from '../assets/images/plani1.jpg';

function PCards() {
  return (
    <div>
        <section>
     
         


    <CardGroup>
      <Card className="cards mb-3 shadow-xl " style={{marginRight:'30px',borderRadius:'3%'}}>
        <Card.Img variant="top" className="foto" style={{borderRadius:'3%', width:'100%', height:'100%'}} src={plani1} />
        <Card.Body>
          <Card.Title>Planung 3.5Zi <span>und 5.5Zi Wohnung</span></Card.Title>
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

export default PCards

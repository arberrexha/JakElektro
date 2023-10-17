import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row,Col, Container } from "react-bootstrap"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2rxsdc', 'template_1v3772d', form.current, 'EuBy9C6cJ1Jb9qgXD')
      .then((result) => {
          console.log(result.text);
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col lg="12" style={{display:'flex' , justifyContent:'center'}}>
          <h1 className='display-4 mb-9 ' style={{display:'flex' , justifyContent:'center'}}>
            Contact Me
          </h1>
        </Col>
      </Row>


      <Row className="sec_sp">
        <Col lg="5" className='mb-5'>
          <h3 className='color_sec py-4'>get in touch</h3>
          <address>
            <strong>
              Email  : Jakupi.D35@hotmail.com
            </strong>
            <br/>
            <br/>
            <p>
              <strong>
                phone : +41 79 882 35 44
              </strong>
            </p>
          </address>
          <p>We answer your questions from 8 a.m. to 11 p.m.</p>
        </Col>
        <Col lg="7" className='d-flex align-items-center'>
        <form ref={form} onSubmit={sendEmail} className='contact__form w-100'>
          <Row>
            <Col lg="6" className='form-group mb-3 '>
               
                <input 
                  className='form-control rounded-10 '
                  type="text"
                  name="to_name" 
                 placeholder='Full name:' />
          
            </Col>
            <Col lg="6" className='form-group mb-3'>
            
                <input 
                className='form-control rounded-10'
                type="email"
                name="from_name"
                placeholder='Your email:'
                id='email'/>
               
            </Col>
          </Row>
          <textarea
           className='form-control rounded-10' 
           id='massage'
           name='message'
           placeholder='Message'
           rows='3'></textarea>
           <br />
           <br />
           <Row>
              <Col lg='12' className='form-goup mb-5' >
                <input className='bn632-hover bn26'  type="submit" value="Send" />
              </Col>
           </Row>
        </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact

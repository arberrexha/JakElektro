
    import React from 'react';
    import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
    import OurJobs from './OurJobs';
    import Aboutus from './Aboutus';
    import Contact from './Contact';
    import Home from './Home';
import { NavLink } from 'react-router-dom';
    
    export default function Footer() {
      return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>
    
            <div>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Jak <span>Elektro.</span>
                  </h6>
                  <p>
                  The JakElektro company is a leader in the field of electrical installations and offers advanced solutions to its customers. We specialize in the design, construction and maintenance of various electrical systems, providing excellent services to the industry, business and residential sectors.
                  </p>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      UmBau
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      NeuBau
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Ladenbau
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    Stark.- Schwachstrom-installationen
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <NavLink to="./Aboutus" className='text-reset'>
                    Aboutus
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="./OurJobs" className='text-reset'>
                      Our Jobs
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="./Contact" className='text-reset'>
                      Contact
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/" className='text-reset'>
                      Home
                    </NavLink>
                  </p>
                </MDBCol>
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Zurich
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    Jakupi.D35@hotmail.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> +41 78 222 20 35
                  </p>
                 
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              JakElektro.com
            </a>
          </div>
        </MDBFooter>
      );
    }




import React from 'react'
import Main from './Main'


function Home() {
  return (
  <>
  <section>
    <div className='slider '>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src="https://www.schroeder-elektroanlagen.de/uploads/2022/12/gebaeudeautomation-960x320.jpg" className="d-block w-100 img-fluid" style={ {height:500}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src=" https://fuessel-haustechnik.de/wp-content/uploads/2021/10/Elektroanlagen-Elektroinstallationen-Fuessel-Neckartenzlingen_slider.jpg " className="d-block w-100 img-fluid" style={{height:500}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://www.am-electrical.co.uk/wp-content/uploads/2015/10/team-banner2.jpg" className="d-block w-100" style={{height:500}} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
 
    <div className='container'>
      <div className='row'>
      <Main />
      </div>
    </div>
  </section>
  <section className="intro" style={{'marginTop':'7vh', 'marginBottom': '4vh'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h2 className="mb-2">Jak <span>Elektro.</span></h2>
                            <p className="mb-4 pe-4">Electro jobs involve a range of electrical engineering tasks, from designing systems and installing equipment to troubleshooting issues. In your project for your cousin's company, you're focused on tasks such as designing electrical wiring, installing and maintaining equipment, and optimizing energy efficiency. Your work contributes to safe and efficient electrical systems, ensuring client satisfaction and advancing the field of electrical engineering.</p>
                            <p className="pe-4">Electro jobs involve a range of electrical engineering tasks, from designing systems and installing equipment to troubleshooting issues. </p>
                         </div>
                        <div className="col-4">
                              <img src="https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/2893633/UZojAeVQ7G.jpg" className="img-fluid"/>
                        </div>
                    </div>
                </div>

            </section>

  </>
    
  )
}

export default Home

import React from 'react'
import loni2 from '../assets/images/loni2.jpg'

function Aboutus() {
  return (
    
    <section className='intro'>
      <div className='container'>
        <div className='row'>
          <div className='mb-2'>
            <div className='row'>
              <h1 className='mb-2' style={{display:'flex', justifyContent:'center', marginLeft:'3vh',marginTop:'4vh',}}>Drilon Jakupi </h1>
              <img src={loni2} className='Photo' style={{borderRadius:'25%', width: '38vh',height: '15%', marginLeft:'10vh' }}/>
              <p className='mb-4 pe-4' style={{width:'50%',marginLeft:'15vh',marginTop:'1vh'}}>
          <b>Dear colleagues and friends,</b> <br/> <br/> <br/>

                It is with great pleasure that I would like to introduce you to my new company, JakElektro. I am happy to be able to share this important moment with you and present a project for which I have worked with great passion and dedication.

                JakElektro is a company specialized in electrical services. We offer advanced and customized solutions in the field of design, installation and maintenance of electrical systems for commercial, industrial and residential buildings.

                The basic values of JakElektro are quality, safety and commitment to customers. We have formed a team consisting of qualified professionals with long experience in the field of electricity. Our work is based on high professional standards and we aim to provide innovative, sustainable and safe solutions for our customers.

                With JakElektro, we are committed to meeting the needs of our customers perfectly.
          </p>
          <p> We understand that every project has unique challenges and specific requirements, and we are committed to providing customized solutions that meet and exceed our clients' expectations. During every project, we focus on high quality work, meet deadlines and ensure that every aspect of our work is perfect.

              With this new step, I am given the opportunity to increase my experience in the field of electronics and to create new successful partnerships. We are interested in various and diverse projects in the field of construction and industry, and we are ready to explore opportunities for cooperation with customers and other businesses in the electrical sector.

              We invite you to follow us on social media and visit our website to learn more about our services and past projects. If you need help in the electrical field, we are ready to listen and create a lasting and successful partnership. <br/> <br/>

              Thanks for following.
</p>
            </div>
            
          </div>
          <br/>
          <br/> <br/> <br/>
         
        </div>
      </div>
    </section>  )
}

export default Aboutus

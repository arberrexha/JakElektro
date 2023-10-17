import React from 'react'


import lbau from '../assets/images/lbau.jpg'
import NeuBau from '../assets/images/NeuBau.jpg'
import umbau from '../assets/images/umbau.jpg'
import { Form } from 'react-router-dom'
import { Row, columns,item } from 'react';


function OurJobs() {
  return (
    <>
    <section>
      <div className='container card' style={{marginTop:'3vh', marginBottom:'3vh'}}>

        <br /><br /><h2 className='m-auto'>Our <span>Jobs.</span></h2><br /><br />


            <h6>New Building Electrical Installations:</h6> Plan a modern, efficient electrical system from the start for safety, energy efficiency, and comfort.<br /><br />

            <h6>Renovation Electrical Installations:</h6> Update outdated wiring, sockets, and switches to meet safety standards and eliminate hazards.<br /><br />

            <h6>Commercial - Shopfitting - Electrical Installations:</h6> Enhance safety, energy efficiency, and comfort in commercial spaces through efficient electrical installations.<br /><br />

            <h6>Power and Low-Voltage Installations:</h6> Different electrical systems for different purposes, ensuring reliable power supply based on specific device requirements.<br /><br />
            <br/>


       
        <section className="intro" style={{'marginTop':'2vh'}}>
        <div className="container">
            <div className="row">
            <div className="Umbau col-15" style={{display:'flex',justifyContent:'flex-end', marginRight:'16vh'}}>
            <h2 className="h1u  mb-2 d-flex jalign-items-center" style={{marginRight:'2vh'}}>Um<span>Bau</span></h2>
                           <div  style={{backgroundColor:'whitesmoke', width:'50vh', height:'35vh', borderRadius:'20%'}}>
                               <p className="mb-4 pe-3" style={{color:'black' ,display:'flex',justifyContent:'center',justifyItems:'center',marginTop:'3.8vh',marginLeft:'4vh'}}>Umbau Elektro-installationen : Ein Umbau der Elektro-Installationen kann aus verschiedenen Gründen erforderlich sein. Einer der wichtigsten Gründe ist die Sicherheit. Wenn die Verkabelung, Steckdosen oder Schalter veraltet sind, können sie potenziell gefährlich sein und ein Risiko für Brände oder Stromschläge darstellen.</p>
                        
                           </div>
            </div>
           
            </div>
        </div>
        </section>
        <section className="intro" style={{'marginTop':'2vh', }}>
        <div className="container">
            <div className="row">
            <div className="neubau col-15" style={{display:'flex',justifyContent:'flex-start'}}>
            <h2 className="mb-2" style={{marginRight:'2vh',color:'black'}}><span>Neu</span><b>Bau</b></h2>
                           <div style={{backgroundColor:'whitesmoke', width:'50vh', height:'25vh', borderRadius:'20%'}}>
                           <p className="mb-4 pe-3" style={{color:'black' ,display:'flex',justifyContent:'center',justifyItems:'center',marginTop:'3vh', marginLeft:'4vh'}} >Neubau Elektro-installationen: Wenn Sie ein neues Gebäude planen, ist es wichtig, dass Sie von Anfang an eine moderne und effiziente Elektro-Installation planen.</p>
                          
                         
                           </div>
            </div>
                
            </div>
        </div>
        </section>
        <section className="intro" style={{'marginTop':'2vh', 'marginBottom': '4vh'}}>
        <div className="container">
            <div className="row">
            <div className="gewerbe col-15" style={{display:'flex',justifyContent:'flex-end', marginRight:'16vh'}}>
            <h2 className="mb-2" style={{marginRight:'2vh'}}><b style={{color:'black'}}>Gewerbe – </b> <span>Ladenbau</span></h2>
                           <div style={{backgroundColor:'whitesmoke', width:'50vh', height:'35vh', borderRadius:'20%'}}>
                           <p className="mb-4 pe-3" style={{color:'black' ,display:'flex',justifyContent:'center',justifyItems:'center',marginTop:'5vh', marginLeft:'4vh'}}>Gewerbe – Ladenbau – Elektro-installation: Gewerbliche Elektro-Installationen, insbesondere im Rahmen des Ladenbaus, sind ein wichtiger Aspekt für jedes Unternehmen, das eine physische Präsenz hat.</p>
                          
                         
                           </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>

     
    </section>
  
    </>
  )
}

export default OurJobs;
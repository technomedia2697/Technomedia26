import React from 'react'
import './css/developement.css'
import CardDevelopement from './CardDevelopement'
// photos
import Rocket from '../photos/Rocket_perspective_matte.png'
import Code from '../photos/Code_perspective_matte.png'
import heart from '../photos/Heart_rate_perspective_matte.png'
import shield from '../photos/Shield_perspective_matte.png'
import success from '../photos/Success_perspective_matte.png'
import Lock from '../photos/Padlock_perspective_matte.png'
// colors
const black = {background:"#29272E"};
const blue = {background:"#68DBF2"};
const burble = {background:"#FF92AE"};
const green = {background:"#67E9F1"};
const yellow = {background:"#FFEF5E"};
const gradient = {background:"#F76680"};
const developement = () => {
  return (
   <>
      <section className='developement'>
            <div className='container-developement'> 

            <div className="headTitle-developement">
                <hr/>
                <h2>
                    <span style={{color:'black'}}>Our Desighn And </span>
                    <br/>
                     developement approach
                </h2>
            </div>
                <div className='container' style={{
                    // display:"grid",
                    // gridTemplateColumns:"repeat(2,1fr)",
                        display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gap: "13px",
                    
                }}>

                <CardDevelopement 
                title='UX Driven Engineering' 
                para='Unlike other companies, we are a UX first development company.
                Projects are driven by designers and they make sure design and
                experiences translate to code.' 
                img={Rocket}
                background={black}
                />

                <CardDevelopement 
                title='Developing Shared Understanding' 
                para='Unlike other companies, we are a UX first development company. 
                Projects are driven by designers and they make sure design and experiences translate to code.' 
                img={Code}
                background={blue}
                />

                <CardDevelopement title='Proven Experience and Expertise'
                 para='Unlike other companies, we are a UX first development company. 
                 Projects are driven by designers and they make sure design and experiences translate to code.'
                 img={heart}
                 background={burble}
                 />

                <CardDevelopement title='Security & Intellectual Property (IP)'
                 para='Unlike other companies, we are a UX first development company. 
                 Projects are driven by designers and they make sure design and experiences translate to code.'
                 img={shield}
                 background={green}
                 />

                <CardDevelopement 
                title='Code Reviews' 
                para='Unlike other companies, we are a UX first development company.
                 Projects are driven by designers and they make sure design and experiences translate to code.'
                 img={success}
                 background={yellow}
                 />

                <CardDevelopement title='Quality Assurance & Testing'
                 para='Unlike other companies, we are a UX first development company. 
                 Projects are driven by designers and they make sure design and experiences translate to code.'
                 img={Lock}
                 background={gradient}
                 />

                    </div>         

            </div>
       
     
        </section>

   </>
  )
}

export default developement
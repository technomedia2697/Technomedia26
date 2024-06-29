import React from 'react'
import logo from '../photos/logo-icon.png'
import './css/footer.css'
import google from '../photos/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <section className='footer-section' style={{paddingBottom:"0"}}>
        <div className='container grid'>
    {/* grid-1 */}
    <div className='grid-1'>
      <img src={logo} alt='' style={{width:"80px"}}/> 
      <span style={{color:"#000"}}>Ik developers</span>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <div>
        <img src={google} alt='' style={{width:"199px",height:"53px"}}/>
      </div>
    </div>
    {/* grid-1 */}

    {/* grid-2 */}
    <div className='grid-2' style={{display:"inline-block",textAlign:"-webkit-center"}}>
      <h2 style={{marginBottom:"15px",position:"relative",left:"-22px"}}>Links</h2>
      <div style={{width:"119px",height:"252px"}}>
      <p>About Us</p>
      <p>Services</p>
      <p>Case Studies</p>
      <p>How it works</p>
      <p>Blog</p>
      <p>Careers</p>
      <p>Areas We Serve</p>
      </div>
    </div>
    {/* grid-2 */}
    {/* grid-3 */}
    <div>
    <h2 style={{marginBottom:"15px"}}>Contact us</h2>
    <div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
    <div>
      <span style={{color:"#000"}}>+923183561921</span>
    </div>
    </div>
    {/* grid-3 */}
    {/* grid-4 */}
    <div style={{position:"absolute",bottom:"0",right:"50px"}}>
      <span style={{borderRadius:"50%",marginRight:"5px",color:"#000",background:"white",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faFacebook}  style={{width:"34px"}} /></span>
      <span style={{borderRadius:"50%",marginRight:"5px",color:"#000",background:"white",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faInstagram}  style={{width:"34px"}} /></span>
      <span style={{borderRadius:"50%",marginRight:"5px",color:"#000",background:"white",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faTwitter}  style={{width:"34px"}} /></span>
      <span style={{borderRadius:"50%",marginRight:"5px",color:"#000",background:"white",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faLinkedin}  style={{width:"34px"}} /></span>
  </div>
    {/* grid-4 */}

        </div>
        <hr style={{marginTop:"20px",width:"90%",border:"1px solid #CBD5E0"}}/>
        <h3 style={{textAlign:"center"}}>© 2023 Copyright by IK Developers. All rights reserved.</h3>
    </section>
  )
}

export default Footer
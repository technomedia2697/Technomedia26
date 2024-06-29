import './css/header.css';
import headerPhoto from '../photos/header.png';
export default function Header(){
    return(
        <header>
        <div className="header-content">
          <h1>  <span style={{color:'black'}}> Great </span> <span className="perpel-color">Product </span>
          <span style={{color:'black' 
           }}> is </span> 
          <br></br> 
          built by great
          <span className="perpel-color"> teams </span> </h1>
          <p>We help bulid and manage a team of world-class developers <br></br>
            to bring your vision to life
          </p>

          <button>Let's got started</button>

        </div>
        <div className="header-photo">
        <img src = {headerPhoto} className ="header" alt ="Logo Navbar"/>

        </div>
      </header>

    );
}
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '../photos/photo1.png'
import photo2 from '../photos/photo2.png'
import photo3 from '../photos/photo3.png'
import './css/slider.css'

function SimbleSlider() {
  const CardArray = [
    {
      id:1,
      photo:photo1,
      title:"",
      paragraph:"",
    },
    {
      id:2,
      photo:photo2,
      title:"",
      paragraph:"",
    },
    {
      id:3,
      photo:photo3,
      title:"",
      paragraph:"",
    }
  ];
 
   // library
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  const Card = CardArray.map((card)=>{
    return(
      
    <div className="card" key={card.id}>
      <img src={card.photo} alt={card.photo} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{}</h2>
        <p className="card-description">{}</p>
      </div>
    </div>
      
    )
  }) 
  const ShowCard = ()=>{
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {Card}
        </Slider> 
     </div>
    )
  }
  
  
 

  return(
    <section className='SimbleSlider'>
        <div className='container-Slider'>
        <div className="headTitle-Slider">
            <h2>
                Services we offer
                <hr/>
            </h2>
        </div>
            {ShowCard()}
        </div>
    </section>

);
}
export default SimbleSlider;



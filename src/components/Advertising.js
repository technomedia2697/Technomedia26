import React from 'react'
import SunRise from '../photos/SunRise.png'
import './css/advertising.css'

const Advertising = () => {
  return (
    <div className='container' style={{width:"1230px",height:"285px",background:"#E4ECF7",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div className='text' style={{width:'531px',height:"110px"}}>
            <h1>Hire the best developers and designers around!</h1>
        </div>
        <div>
            <div className='parent'>
            <img src={SunRise} alt='' className='img'/>
            <button className='btn' style={{width:"262px",height:"57px",padding:"14px 25px",borderRadius:"5px", border:"1px solid #F16063",background:"#F16063",color:"white"}} >Hire Top Developers</button>
            </div>
        </div>
    </div>
  )
}

  export default Advertising
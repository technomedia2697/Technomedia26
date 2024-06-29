import React from 'react'
import './css/cardDevelopemen.css'
import './css/BoxCard.css'
const CardDevelopement = ({title,para,img,background}) => {
    
  return (
    <div className='container-card'>
        <div className='child' style={{width:"418px",height:"237px",display:"flex",alignItems:"center",margin:" 2px auto",padding:"10px"}}>
        <div style={{height:"100%",marginRight:"20px",position:"relative"}}>
        {/* Box */}
        <div className='box' style={background}>
        <img src={img} alt=''/>
        </div>
        {/* Box */}
        </div> 
        <div className='TEXT' >
            <h1>{title}</h1>
            <p>{para}</p>
        </div>
        </div>
        
    </div>
  )
}

export default CardDevelopement

// //   return (
//     <div className='container-card'>
//         <div className='child' style={{width:"537px",height:"139px",display:"flex",alignItems:"center",margin:" 0 auto"}}>
//         <div style={{height:"100%",marginRight:"20px",position:"relative"}}>
//         {/* Box */}
//         <div className='box' style={background}>
//         <img src={img} alt=''/>
//         </div>
//         {/* Box */}
//         </div> 
//         <div className='TEXT' >
//             <h1>{title}</h1>
//             <p>{para}</p>
//         </div>
//         </div>
        
//     </div>
//   )
// }
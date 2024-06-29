import './css/caseStudy.css';
import pic1 from '../photos/Case-study1.png';
import pic2 from '../photos/Case-study2.png';
import pic3 from '../photos/Case-study3.png';
import '../components/css/styleToAll.css';

const c = {backgroundColor:"#f7f9fb"};
const b = {backgroundColor: "rgb(227 253 243)"};
const d = {background: "#E7DAED"};
export default function CaseStudy(){
    const casesShow = [
        {id : 1 , pic : pic1  , h3Text : "Website Design for SCFC Canada", pText : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.", stylee : c },
        {id : 2 , pic : pic2 , h3Text : "Website Design for SCFC Canada", pText : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry." , stylee : d  },
        {id : 3 , pic : pic3 , h3Text : "Website Design for SCFC Canada", pText : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry." , stylee :b ,  }
    ];
    const cases = casesShow.map((caseShow ) => {
        return (
            <div className='flex-caseStudy' key ={caseShow.id}>
                <div className='pic'>
                   <img  src={caseShow.pic} alt= "case study"/>
                </div>
                <div  className ="text" style = {caseShow.stylee}>
                    <h3> {caseShow.h3Text}</h3>
                    <p>{caseShow.pText}</p>
                    <a href='#'> Read More </a>
                </div>
            
            </div>
        );

    });


    return(
        <section  className="case-study">
            <div className= "container-caseStudy"> 
            <hr/>
            <h2>
                <span>  Our recent</span>
                Case studies
            </h2>
         {cases}
         <a href ="#"> Read More Case Study</a>
         </div>
        </section>
    );
}
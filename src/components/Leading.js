import video from '../photos/video.png';
// import bar from '../photos/logo-list.png';
import './css/leading.css';
import './css/styleToAll.css';


export default function Leading(){
    return(
        <section className="leading">
            <div className="container-leading">
                <div className=' leading-flex'>
                    <div className="text-leading">
                    <hr/>
                        <h2>
                            <span style={{color:'black'}}>Leading companies trust us </span><br></br>
                            to develop software
                        </h2>
                        <p>
                            We <span>
                                add development capacity </span>
                                to teach teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your projects.
                        </p>
                        <a href="#" > see more informations </a> <i class="fa-solid fa-arrow-right" ></i>
                    </div>

            
            <div className='video-leading'>
                <img src = {video} alt="video" />

            </div>
        

                </div>
            
        
        <div className="end-leading">
                <hr/>
                <br/>
                    <h2>
                        <span style={{color:'black'}}>Meet the people </span><br></br>
                         We are Working With
                    </h2>
            
         </div>
         {/* <div className="icons-pic">
            <img src={bar} alt="stair bar"/>

         </div> */}
         </div>
        </section>
    );
}
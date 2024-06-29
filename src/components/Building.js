import './css/styleToAll.css';
import './css/building.css';
import photo1 from '../photos/photo1.png';
import photo2 from '../photos/photo2.png';
import photo3 from '../photos/photo3.png';

export default function Building(){
    const buildArray = [
        {id : 1, title: "Build the right team to scale" , text: "Finding the right talent is not easy. We help you fiind the talent that suits your long trem not the case with freelancers Our delivery model  helps you costs and deliver within budget",bordText: "Simform is quick to identify larger problem with the Software so we decided to expands our scope to build new modules", photo :photo1},
      
        {id : 2, title: "Build the right team to scale" , text: "Finding the right talent is not easy. We help you fiind the talent that suits your long trem not the case with freelancers Our delivery model  helps you costs and deliver within budget",bordText: "Simform is quick to identify larger problem with the Software so we decided to expands our scope to build new modules" , photo:photo2},
      
        {id : 3, title: "Build the right team to scale" , text: "Finding the right talent is not easy. We help you fiind the talent that suits your long trem not the case with freelancers Our delivery model  helps you costs and deliver within budget",bordText: "Simform is quick to identify larger problem with the Software so we decided to expands our scope to build new modules", photo:photo3}, 
    ]
    
    const builds = buildArray.map((build) =>{
        return (
            <div className='building-flex' key={build.id}>
                      <div className='building-photo'>
                          <img src= {build.photo} alt="building"/>
                      </div>
                      <div className='text-building'>
                          <h3> {build.title}</h3>
                          <p> {build.text}</p>
                          <p className='border-left'> {build.bordText}</p>
                      </div>
                  </div>
        )
             }
           
            )



    return(
        <section className='building'>
            <div className='container-building'> 

            <div className="headTitle-building">
                <hr/>
                <h2>
                    <span style={{color:'black'}}> Building companies trust us </span>
                    <br/>
                    to develop software
                </h2>
            </div>
        
                    

               
                {builds}
            



            </div>
       
     
           
             
        

      
        </section>

    );
}
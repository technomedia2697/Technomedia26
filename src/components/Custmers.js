import './css/custmers.css';
import member1 from '../photos/member1.png';
import member2 from '../photos/member2.png';
import member3 from '../photos/member3.png';
import member4 from '../photos/member4.png';
import member5 from '../photos/member5.png';



export default function Custmors(){
  const members = [
    {id: 1, nameMember: "jhon helie" ,jopMember: "Web Design" , photoMember: member1 },
    {id: 2, nameMember: "Barakat Anowar" ,jopMember: "Front-End" ,  photoMember: member2 },
    {id: 3, nameMember: "lila Omar" ,jopMember: "Back-End" ,  photoMember: member3  },
    {id: 4, nameMember: "jhon Dank" ,jopMember: "SoftWare Enginnering" , photoMember: member4},
    {id: 5, nameMember: "lile Fourd" ,jopMember: "Web Design" ,  photoMember: member5},
  ];
  const myMember = members.map((member) => {
    return (
    <div key={member.id} className='flex-member'>
       <img src = {member.photoMember} alt = "Team Member" style={{width:"160px"}}/>
        <p> {member.nameMember}</p>
        {/* <p>stars</p> */}
         <p style={{color:'#bbb4b4'}}> {member.jopMember}</p>
    </div>
    );
    
  
  });
    return(
        <section>
            <div className="title-custmors">
                <h4> Why custmors love</h4>
                <h2>Working with us</h2>
            </div>
            <div className="text-custmors">
                <p>
                Without any doubt i recommend Alcaline Solutions as one of <br></br>

                the best web design and digital marketing agencies. one of <br></br>

                the est agencies I've came across to far. Wouldn't be <br></br>
                
                hesitated to itroduce their work to someone else.
                </p>
              
                </div>
                <div className="team-customers">
                      {myMember}
                 
                </div>
        </section>
    );
}
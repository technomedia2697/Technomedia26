import './css/building.css';
export default function Containerbuilding({children}){
    return(
        <div className='container-building'>
            <div className="building-flex">
               {children}

            </div>
        </div>
   
    );
}
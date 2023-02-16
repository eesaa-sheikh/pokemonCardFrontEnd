import { Link } from "react-router-dom";
import AccountList from "./AccountList";

const AccountCard = ({acc, setOpp}) => {

    // handleClick()

    return ( 
        <>                
       <div className=" border-gray-700">
        
       <img className='typeImage' src= {require(`../TrainerAsset/${acc.username}.jpg`)}/>
                                             
            <Link to={`playgame/${acc.id}`}><h3>{acc.username}</h3></Link>
            {/* <button onClick={console.log(acc)}>PLAY</button> */}
        
        </div>
        </> 
    );
}
 
export default AccountCard;
import { Link } from "react-router-dom";
import AccountList from "./AccountList";

const AccountCard = ({acc, setOpp}) => {

    // handleClick()

    return ( 
        <>
            <Link to={`playgame/${acc.id}`}><h3>{acc.username}</h3></Link>
            {/* <button onClick={console.log(acc)}>PLAY</button> */}
        </> 
    );
}
 
export default AccountCard;
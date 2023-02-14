import { Link } from "react-router-dom";
import AccountList from "./AccountList";

const AccountCard = ({acc}) => {

    

    return ( 
        <>
            <h3>{acc.username}</h3>
            <button>PLAY</button>
        </>
    );
}
 
export default AccountCard;
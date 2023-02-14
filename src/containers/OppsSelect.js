import { useEffect, useState } from "react";
import AccountCard from "../components/AccountCard";
import AccountList from "../components/AccountList";

const OppsSelect = ({setOpp}) => {

    const SERVER_URL = "http://localhost:8080/accounts";

    const [allAccounts, setAllAccounts] = useState([]);
    
    useEffect(() => {
        fetch(SERVER_URL)
        .then(response => response.json())
        .then(data => setAllAccounts(data))
    }, []);
    
    return ( 
        <>
            <AccountList allAccounts={allAccounts} setOpp={setOpp}/>
        </>
    );
}
 
export default OppsSelect;
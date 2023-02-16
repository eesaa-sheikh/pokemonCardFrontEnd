import { useEffect, useState } from "react";
import AccountCard from "../components/AccountCard";
import AccountList from "../components/AccountList";
import battleSnd from "../PokemonTypeAsset/battleMusic.mp3";


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

<audio  autoPlay>
            <source src={battleSnd} type="audio/mp3"></source>
        </audio>
            <AccountList allAccounts={allAccounts} setOpp={setOpp}/>
        </>
    );
}
 
export default OppsSelect;
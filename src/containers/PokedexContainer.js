import { useEffect, useState } from "react"
import Card from "../components/Card"
import PokedexList from "../components/PokedexList";

const PokedexContainer = () => {

    const SERVER_URL = "http://localhost:8080/cards";

    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch(SERVER_URL)
        .then(response => response.json())
        .then(data => setPokedex(data));
    }, []);

    const [showCard, setShowCard] = useState("");


    return ( 
        <div className="pokedex">
            <div className="pokedex-list grid gap-2 overflow-y-scroll h-screen whitespace-nowrap scrollbar-hide">
                <PokedexList pokedex={pokedex} setShowCard={setShowCard}/>
            </div>
            <div className="show-card">
                {showCard ? <Card pokemon={showCard}/> : <div className="w-1/2"></div>}
            </div>
        </div>
    );
}
 
export default PokedexContainer;
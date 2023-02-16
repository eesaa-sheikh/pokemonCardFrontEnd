import { useEffect, useState } from "react"
import Card from "../components/Card"
import PokedexList from "../components/PokedexList";
import pokedexSong from "../PokemonTypeAsset/pokiSong.mp3";

const PokedexContainer = ({account}) => {

    const SERVER_URL = "http://localhost:8080/cards";

    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch(SERVER_URL)
        .then(response => response.json())
        .then(data => setPokedex(data));
    }, []);

    // console.log(pokedex);

    const [showCard, setShowCard] = useState("");
    const [ownedCards, setOwnedCards] = useState([]);
    const [isOpp, setIsOpp] = useState("");

    useEffect(() => {
        if (account && pokedex) {
            
            const ownedIdArray = account.ownerships.map((owned) => {return owned.card.id});
            console.log(ownedIdArray);
            console.log(pokedex)

            const ownedPokedex = pokedex.map((card) => {
                if (ownedIdArray.includes(card.id)) {
                    console.log(card.id)
                    return true;
                } else {
                    return false;
                }
                });

            setOwnedCards(ownedPokedex); 
            console.log(ownedCards)
        }

    }, [pokedex, account]);



    return ( 
        <div className="pokedex-container">
            <div className="pokedex-list grid gap-2 overflow-y-scroll h-screen whitespace-nowrap scrollbar-hide">
                <PokedexList pokedex={pokedex} setShowCard={setShowCard} ownedCards={ownedCards}/>
            </div>
            <div className="card-div">
                {showCard ? <Card className="pokedex-card" pokemon={showCard}/> : <div className="w-1/2"></div>}
            </div>
        </div>
    );
}
 
export default PokedexContainer;
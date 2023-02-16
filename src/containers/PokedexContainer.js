import { useEffect, useState } from "react"
import Card from "../components/Card"
import PokedexList from "../components/PokedexList";
import pokedexSong from "../PokemonTypeAsset/pokiSong.mp3";

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
        <div className="pokedex-container">
            <audio  autoPlay>
            <source src={pokedexSong} type="audio/mp3"></source>
        </audio>
            <div className="pokedex-list grid gap-2 overflow-y-scroll h-screen whitespace-nowrap scrollbar-hide">
                <PokedexList pokedex={pokedex} setShowCard={setShowCard}/>
            </div>
            <div className="card-div">
                {showCard ? <Card className="pokedex-card" pokemon={showCard}/> : <div className="w-1/2"></div>}
            </div>
        </div>
    );
}
 
export default PokedexContainer;
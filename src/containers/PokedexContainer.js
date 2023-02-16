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

    

    return ( 

        
        <div className="white">

<audio  autoPlay>
            <source src={pokedexSong} type="audio/mp3"></source>
        </audio>

            <PokedexList pokedex={pokedex}/>
        </div>
    );
}
 
export default PokedexContainer;
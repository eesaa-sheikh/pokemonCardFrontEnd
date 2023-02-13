import { useEffect, useState } from "react"
import Card from "../components/Card"

const PokedexContainer = () => {

    const SERVER_URL = "http://localhost:8080/cards";

    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch(SERVER_URL)
        .then(response => response.json())
        .then(data => setPokedex(data));
    }, []);

    const pokedexList = pokedex.map((pokemon) => {

        return (
            <>
                <Card key={pokemon.id} pokemon={pokemon}/>
                <hr/>
            </>
        )
    });

    return ( 
        <>
            {pokedexList}
            {console.log(pokedex)}
        </>
    );
}
 
export default PokedexContainer;
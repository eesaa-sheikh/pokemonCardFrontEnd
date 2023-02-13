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

    // §§ Eesaa Code Test
    // function renderPokemon(pokedex) {
    //     const colors = {
    //       fire: "#FFA6A6",
    //       grass: "#A5F79E",
    //       electric: "#FCF7DE",
    //       water: "#B4DBFE",
    //       ground: "#f4e7da",
    //       rock: "#d5d5d4",
    //       fairy: "#fceaff",
    //       poison: "#C19FFD",
    //       bug: "#f8d5a3",
    //       dragon: "#97b3e6",
    //       psychic: "#eaeda1",
    //       flying: "#F5F5F5",
    //       fighting: "#E6E0D4",
    //       normal: "#F5F5F5"
    //     };

    //     const main_types = pokedex.type.name(colors);

       

    // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
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
import { useEffect, useState } from "react";
import Card from "./Card";

const PokedexList = ({pokedex, setShowCard}) => {

    const [pokeApi, setPokiApi] = useState([]);
    

    // useEffect(() => {
    //     let pokeArray = [];

    //     pokedex.map((pokemon) => {
    //         fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`)
    //         .then(repsonse => repsonse.json())
    //         .then(pokemonObj => pokeArray.push(pokemonObj))
            
    //     })
    //     console.log(pokeArray)

    // }, [])

    
    const listPokemon = pokedex.map((pokemon) => {
        

        return (
            <div onMouseOver={() => {setShowCard(pokemon)}} className="pokedex-entry flex" style={{border: `5px solid ${pokemon.type.colourType}`,
                                                            borderRadius: "5px",
                                                            backgroundColor: `${pokemon.type.colourType}`}}>
                <h4 className="">{pokemon.name}</h4>
                <img className='typeImage' src= {require(`../PokemonTypeAsset/${pokemon.type.name}_icon_SwSh.png`)} width="25px" alt = {pokemon.type.name}/>
                {/* <div></div> */}
                {/* <img src={pokeApi.sprites.front_default}/> */}
            </div>
        )
    })

    return ( 
        <>
            {listPokemon}
        </>
    );
}
 
export default PokedexList;
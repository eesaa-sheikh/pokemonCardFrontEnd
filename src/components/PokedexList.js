import { useEffect, useState } from "react";
import Card from "./Card";

const PokedexList = ({pokedex, setShowCard, ownedCards}) => {

    const [pokeApi, setPokiApi] = useState([]);
    const [pokeArray, setPokeArray] = useState([]);
    
    // const sprites = pokedex.map((pokemon) => {
                
    //             if (pokemon.name.contains("'")) {

    //             }

    //             fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`)
    //             .then(repsonse => repsonse.json())
    //             .then(pokemonObj => pokeArray.push(pokemonObj))
                
    //         })

    // console.log(pokeArray);

    useEffect(() => {
        if (ownedCards) {
            let arrayToPush = pokeArray;
            for (let i = 0; i < pokedex.length; i++) {
                if (ownedCards[i]) {
                    arrayToPush.push(
                        <div onMouseOver={() => {setShowCard(pokedex[i])}} className="pokedex-entry flex" style={{border: `5px solid ${pokedex[i].type.colourType}`,
                                                                backgroundColor: `${pokedex[i].type.colourType}`}}>
                            <h4 className="pokemon-name">{pokedex[i].name}</h4>
                            <img src= {require(`../PokemonTypeAsset/${pokedex[i].type.name}_icon_SwSh.png`)} width="105px" alt = {pokedex[i].type.name}/>
                        </div>)
                    continue;
                } else {
                    arrayToPush.push(
                    <div onMouseOver={() => {setShowCard()}} className="pokedex-entry flex" style={{border: `5px solid grey`,
                                                            backgroundColor: `grey`}}>
                        <h4 className="pokemon-name">???</h4>
                        {/* <img className='typeImage' src= {require(`../PokemonTypeAsset/pokemonCardBack.png`)} width="25px" alt = {"??? unknown Pokémon"}/> */}
                    </div>)
                }
            }
            setPokeArray(arrayToPush);
        }
    }, [ownedCards])
    
    
    const listPokemon = pokedex.map((pokemon) => {
        return (
            <div onMouseOver={() => {setShowCard(pokemon)}} className="pokedex-entry flex" style={{border: `5px solid ${pokemon.type.colourType}`,
                                                            backgroundColor: `${pokemon.type.colourType}`}}>
                <h4 className="pokemon-name">{pokemon.name}</h4>
                <img className='typeImage' src= {require(`../PokemonTypeAsset/${pokemon.type.name}_icon_SwSh.png`)} width="125px" alt = {pokemon.type.name}/>
                {/* <div></div> */}
                {/* <img src={pokeApi.sprites.front_default}/> */}
            </div>
        )
    })

    return ( 
        <div className="entry-list">
            {pokeArray}
        </div>
    );
}
 
export default PokedexList;
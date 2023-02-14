import * as React from 'react';
import Rating from '@mui/material/Rating';


const Card = ({pokemon, selectedCard, setSelectedCard}) => {


    return ( 
        <>{pokemon !== selectedCard ? <div onClick={() => {setSelectedCard(pokemon)}} 
             className = "pokemonCard" style = {{backgroundImage : `url(${pokemon.imgUrl})`,
                                                 width: "6.3cm",
                                                 height: "8.8cm", 
                                                 backgroundSize: "cover", 
                                                 backgroundPosition:"center",
                                                 border: `10px solid ${pokemon.type.colourType}`,
                                                 borderRadius: "10px",
                                                 position: "relative",
                                                 fontFamily: "'Roboto', sans-serif",
                                                }}>
            <div className='cardBannerTop'>
                <div className="cardBanner">
                <h2>{pokemon.name}</h2>
                <Rating name="pokemonRating" size="small" className="cardRating" value={pokemon.rating} max={pokemon.rating} readOnly/>
                </div>
                {/* <img src={pokemon.imgUrl}/> */}
                
                <img className='typeImage' src= {require(`../PokemonTypeAsset/${pokemon.type.name}_icon_SwSh.png`)} width = {"30px"} alt = {pokemon.type.name}/>
                </div>
            
            
            <div className="pokeInfo">
                <ul>
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm" : "m-[1px] mx-auto w-fit p-[3px] text-sm"}><span className="statName">HP</span> {pokemon.hp}</p>
                    <p className='m-[1px] mx-auto transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] w-fit p-[3px] text-sm hover:border-white'><span className="statName">Atk</span> {pokemon.attack}</p>
                
                </ul>
                <ul>
                    <p className='m-[1px] mx-auto transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] w-fit p-[3px] text-sm hover:border-white'><span className="statName">Def</span> {pokemon.defence}</p>
                    <p className='m-[1px] mx-auto transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] w-fit p-[3px] text-sm hover:border-white'><span className="statName">SpA</span> {pokemon.specialAttack}</p>

                </ul>
                <ul>
                    <p className='m-[1px] mx-auto transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] w-fit p-[3px] text-sm hover:border-white'><span className="statName">SpD</span> {pokemon.specialDefence}</p>
                    <p className='m-[1px] mx-auto transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] w-fit p-[3px] text-sm hover:border-white'><span className="statName">Spe</span> {pokemon.speed}</p>
                </ul>
            </div>
            {/* <p>Rating: {pokemon.rating}</p> */}
        </div> : <></>}</>
    );
}
 
export default Card;
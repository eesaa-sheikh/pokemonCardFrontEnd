import * as React from 'react';
import Rating from '@mui/material/Rating';


const Card = ({pokemon, userHand, setUserHand, selectedCard, setSelectedCard}) => {

    const handleClick = (() => {
        if (selectedCard === "") {
            setSelectedCard(pokemon);
            const newHand = userHand.filter(item => item !== pokemon);
            console.log(newHand);
            setUserHand(newHand);
        }
    })

    return ( 
        <>{1 === 1  ? <div onClick={handleClick} 
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
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">HP</span> {pokemon.hp}</p>
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p>
                
                </ul>
                <ul>
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p>
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p>

                </ul>
                <ul>
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p>
                    <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p>
                </ul>
            </div>
            {/* <p>Rating: {pokemon.rating}</p> */}
        </div> : <></>}</>
    );
}
 
export default Card;
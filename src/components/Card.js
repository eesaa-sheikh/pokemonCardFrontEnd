import * as React from 'react';
import Rating from '@mui/material/Rating';

const Card = ({pokemon}) => {


    return ( 
        <div className = "pokemonCard" style = {{backgroundImage : `url(${pokemon.imgUrl})`,
                                                 width: "6.3cm",
                                                 height: "8.8cm", 
                                                 backgroundSize: "cover", 
                                                 backgroundPosition:"center",
                                                 border: `10px solid ${pokemon.type.colourType}`,
                                                 borderRadius: "10px",
                                                 position: "relative",
                                                 fontFamily: "'Roboto', sans-serif",
                                                }}>
            <div className="cardBanner">
            <h2>{pokemon.name}</h2>
            <Rating name="pokemonRating" size="small" className="cardRating" value={pokemon.rating} max={pokemon.rating} readOnly/>
            </div>
            {/* <img src={pokemon.imgUrl}/> */}

            <img className='typeImage' src= {pokemon.type.imgUrl} width = {"20px"} alt = {pokemon.type.name}/>

            
            
            
            <p className="pokiType">Type: {pokemon.type.name}</p>
            <div className="pokeInfo">
                <ul>
                    <p><span className="statName">HP</span> {pokemon.hp}</p>
                    <p><span className="statName">Atk</span> {pokemon.attack}</p>
                
                </ul>
                <ul>
                    <p><span className="statName">Def</span> {pokemon.defence}</p>
                    <p><span className="statName">SpA</span> {pokemon.specialAttack}</p>

                </ul>
                <ul>
                    <p><span className="statName">SpD</span> {pokemon.specialDefence}</p>
                    <p><span className="statName">Spe</span> {pokemon.speed}</p>
                </ul>
            </div>
            {/* <p>Rating: {pokemon.rating}</p> */}
        </div>
    );
}
 
export default Card;
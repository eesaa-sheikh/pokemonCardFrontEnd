const Card = ({pokemon}) => {


    return ( 
        
        //         <div className= "meme" style = {backgroundImage: "https://assets.codepen.io/13471/sparkles.gif", opacity:"0.5"}></div>

        
        <div className = "pokemonCard" style = {{backgroundImage : `url(${pokemon.imgUrl})`,width: "6.3cm", height: "8.8cm", backgroundSize: "cover", backgroundPosition:"center"}}>
            <h2 className="pokiName">{pokemon.name}</h2>

            {/* <div>
            <img src="background-image: url('https://images.pokemontcg.io/swsh3/19_hires.png');"/>
            </div> */}

            {/* <img src={pokemon.imgUrl}/> */}
            
            
            <p className="pokiType">Type: {pokemon.type.name}</p>
            <div className="pokeInfo">
            <ul>
                <li>HP: {pokemon.hp}</li>
                <li>Atk: {pokemon.attack}</li>
                <li>Def: {pokemon.defence}</li>
                <li>SpA: {pokemon.specialAttack}</li>
                <li>SpD: {pokemon.specialDefence}</li>
                <li>Spe: {pokemon.speed}</li>
            </ul>
            </div>
            <p>Rating: {pokemon.rating}</p>
        </div>

    );
}
 
export default Card;
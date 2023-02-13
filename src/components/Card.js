const Card = ({pokemon}) => {


    return ( 
        <div className = "pokemonCard" style = {{backgroundImage : `url(${pokemon.imgUrl})`, width: "30vw", height: "45vh", backgroundSize: "cover", backgroundPosition:"center"}}>
            <h2>{pokemon.name}</h2>

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
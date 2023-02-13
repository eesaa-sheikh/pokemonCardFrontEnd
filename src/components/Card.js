const Card = ({pokemon}) => {


    return ( 
        <>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.imgUrl}/>
            <p>Type: {pokemon.type.name}</p>
            <ul>
                <li>HP: {pokemon.hp}</li>
                <li>Atk: {pokemon.attack}</li>
                <li>Def: {pokemon.defence}</li>
                <li>SpA: {pokemon.specialAttack}</li>
                <li>SpD: {pokemon.specialDefence}</li>
                <li>Spe: {pokemon.speed}</li>
            </ul>
            <p>Rating: {pokemon.rating}</p>
        </>
    );
}
 
export default Card;
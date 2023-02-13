const Card = ({pokemon}) => {


      // §§ Eesaa Code Test
    //   function renderPokemon() {
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
    //     const main_types = pokemon.type.name(colors);


    return ( 
        
        //         <div className= "meme" style = {backgroundImage: "https://assets.codepen.io/13471/sparkles.gif", opacity:"0.5"}></div>

        
        <div className = "pokemonCard" style = {{backgroundImage : `url(${pokemon.imgUrl})`,width: "6.3cm", height: "8.8cm", backgroundSize: "cover", backgroundPosition:"center"}}>
            <h2 className="pokiName">{pokemon.name}</h2>

            {/* <div>
            <img src="background-image: url('https://images.pokemontcg.io/swsh3/19_hires.png');"/>
            </div> */}

            {/* <img src={pokemon.imgUrl}/> */}
            
            <div className="pokiType">
            <p >Type: {pokemon.type.name}</p>
            </div>
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
            <div>
            <p className="rating">Rating: {pokemon.rating}</p>
            </div>
        </div>

    );
}

 
export default Card;
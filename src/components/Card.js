import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';


const Card = ({pokemon, userHand, setUserHand, selectedCard, setSelectedCard, handleRound, gameState}) => {

//     const [mousePos, setMousePos] = useState({});

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setMousePos({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener(
//         'mousemove',
//         handleMouseMove
//       );
//     };
//   }, []);

    

    const handleClick = (() => {
        // check if NOT playerA turn 
        // check 
        console.log(gameState);
        if (selectedCard === "") {
            setSelectedCard(pokemon);
            const newHand = userHand.filter(item => item !== pokemon);
            setUserHand(newHand);
        }
        if(!gameState.playerATurn){
            setTimeout(500);
            handleRound("hp");
        }

    })

    const handleStateClick = () => {
        
    };

    return ( 
        <>
            <>
            {/* ({mousePos.x}, {mousePos.y}) */}
            </>
            <div onClick={handleClick} 
                className = "pokemonCard" style = {{backgroundImage : `url(${pokemon.imgUrl})`,
                                                    width: "6.3cm",
                                                    height: "8.8cm", 
                                                    backgroundSize: "cover", 
                                                    backgroundPosition:"center",
                                                    border: `10px solid ${pokemon.type.colourType}`,
                                                    borderRadius: "10px",
                                                    position: "relative",
                                                    fontFamily: "'Roboto', sans-serif"}}>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
  
                                             
            <div className='cardBannerTop'>
                <div className="cardBanner">
                <h2>{pokemon.name}</h2>
                <Rating name="pokemonRating" size="small" className="cardRating" value={pokemon.rating} max={pokemon.rating} readOnly/>
                </div>
                {/* <img src={pokemon.imgUrl}/> */}
                
                <img className='typeImage' src= {require(`../PokemonTypeAsset/${pokemon.type.name}_icon_SwSh.png`)} width = {"30px"} alt = {pokemon.type.name}/>
                </div>
            
            
                <div className="pokeInfo z-50">
                    <ul>
                        {/* extract selectedStat name from both cards */}
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleRound("hp")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">HP</span> {pokemon.hp}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">HP</span> {pokemon.hp}</p>}                
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleRound("attack")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p>}                
                        {/* <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer  z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p>         */}
                    </ul>
                    <ul>
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleRound("defence")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p>}                
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleRound("specialAttack")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p>}                
                        {/* <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p>
                        <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p> */}
                    </ul>
                    <ul>
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleRound("specialDefence")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p>}                
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleRound("speed")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p>}                
                        
                        {/* <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p>
                        <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p> */}
                    </ul>
                </div>
                {/* mega lucario: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cdf2e60-0243-485d-a272-d1dcd303cb53/dbkm2m6-9bc4ad73-fe77-4000-9a53-65bd8f48b568.jpg/v1/fill/w_294,h_350,q_70,strp/no_448_mega_by_ffxazq_dbkm2m6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxOCIsInBhdGgiOiJcL2ZcLzJjZGYyZTYwLTAyNDMtNDg1ZC1hMjcyLWQxZGNkMzAzY2I1M1wvZGJrbTJtNi05YmM0YWQ3My1mZTc3LTQwMDAtOWE1My02NWJkOGY0OGI1NjguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.POTcNHPHtrB6-6MKsXvcti0VkYprWK7f0S9xNm7FYK8 */}
                {/* <p>Rating: {pokemon.rating}</p> */}
            </div>
        </>
    );
}
 
export default Card;
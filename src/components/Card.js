import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';


const Card = ({pokemon, userHand, setUserHand, selectedCard, setSelectedCard, handleRound, handleTimeOutBeforeRound, gameState, setSelectedStat, inHand, isOpponent}) => {

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
        let chosenStat;
        if (selectedCard === "") {
            setSelectedCard(pokemon);
            // console.log(opponentHand);
            // setOppSelectedCard(opponentHand[0]);
            
            const newHand = userHand.filter(item => item !== pokemon);
            setUserHand(newHand);
            
        }
        if(!gameState.playerATurn && selectedCard){
            // setTimeout(500);
            const statArray = ["hp", "attack", "defence", "specialAttack", "specialDefence", "speed"];
            chosenStat = statArray[Math.floor(Math.random() * statArray.length)];  
            handleTimeOutBeforeRound(chosenStat);
            setSelectedStat(chosenStat);      
        }

    })

    const handleStateClick = (stat) => {
        setSelectedStat(stat);
        handleTimeOutBeforeRound(stat);
    };

    return ( 
        <>
            <>
            {/* ({mousePos.x}, {mousePos.y}) */}
            </>
            {!isOpponent ? 
            <div onClick={handleClick} 
                className = {inHand ? `pokemonCard ${"w-[6.3cm] h-[8.8cm]"}` : `pokemonCard ${"w-[6.3cm] h-[8.8cm]"}`} style = {{backgroundImage : `url(${pokemon.imgUrl})`,
                                                    
                                                    backgroundSize: "cover", 
                                                    backgroundPosition:"center",
                                                    border: `10px solid ${pokemon.type.colourType}`,
                                                    borderRadius: "10px",
                                                    position: "relative",
                                                    fontFamily: "'Roboto', sans-serif",
                                                    marginRight: "auto",
                                                    marginLeft: "auto"}}>
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
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleStateClick("hp")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">HP</span> {pokemon.hp}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">HP</span> {pokemon.hp}</p>}                
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleStateClick("attack")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p>}                
                        {/* <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer  z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Atk</span> {pokemon.attack}</p>         */}
                    </ul>
                    <ul>
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleStateClick("defence")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p>}                
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleStateClick("specialAttack")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p>}                
                        {/* <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Def</span> {pokemon.defence}</p>
                        <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpA</span> {pokemon.specialAttack}</p> */}
                    </ul>
                    <ul>
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleStateClick("specialDefence")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p>}                
                        {pokemon === selectedCard && gameState.playerATurn ? <p onClick={() => {handleStateClick("speed")}} className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p> : <p className={pokemon === selectedCard && gameState.playerATurn ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p>}                
                        
                        {/* <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">SpD</span> {pokemon.specialDefence}</p>
                        <p className={pokemon === selectedCard ? "hover:border-white  transition-all duration-500 border-cyan-500/0 rounded-md border-[1px] m-[1px] mx-auto w-fit p-[3px] text-sm cursor-pointer z-50" : "m-[1px] mx-auto w-fit p-[3px] text-sm cursor-default"}><span className="statName">Spe</span> {pokemon.speed}</p> */}
                    </ul>
                </div>
                {/* mega lucario: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cdf2e60-0243-485d-a272-d1dcd303cb53/dbkm2m6-9bc4ad73-fe77-4000-9a53-65bd8f48b568.jpg/v1/fill/w_294,h_350,q_70,strp/no_448_mega_by_ffxazq_dbkm2m6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxOCIsInBhdGgiOiJcL2ZcLzJjZGYyZTYwLTAyNDMtNDg1ZC1hMjcyLWQxZGNkMzAzY2I1M1wvZGJrbTJtNi05YmM0YWQ3My1mZTc3LTQwMDAtOWE1My02NWJkOGY0OGI1NjguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.POTcNHPHtrB6-6MKsXvcti0VkYprWK7f0S9xNm7FYK8 */}
                {/* <p>Rating: {pokemon.rating}</p> */}
            </div> : <><div onClick={handleClick} 
                className = {inHand ? `pokemonCard ${"w-[6.3cm] h-[8.8cm]"}` : `pokemonCard ${"w-[6.3cm] h-[8.8cm]"}`} style = {{backgroundImage : `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_759,h_1053,strp/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA)`,
                                                    
                                                    backgroundSize: "cover", 
                                                    backgroundPosition:"center",
                                                    // border: `10px solid ${pokemon.type.colourType}`,
                                                    borderRadius: "10px",
                                                    position: "relative",
                                                    marginRight: "auto",
                                                    marginLeft: "auto"}}>
  
                                             
            
            
            
                
                {/* mega lucario: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cdf2e60-0243-485d-a272-d1dcd303cb53/dbkm2m6-9bc4ad73-fe77-4000-9a53-65bd8f48b568.jpg/v1/fill/w_294,h_350,q_70,strp/no_448_mega_by_ffxazq_dbkm2m6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxOCIsInBhdGgiOiJcL2ZcLzJjZGYyZTYwLTAyNDMtNDg1ZC1hMjcyLWQxZGNkMzAzY2I1M1wvZGJrbTJtNi05YmM0YWQ3My1mZTc3LTQwMDAtOWE1My02NWJkOGY0OGI1NjguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.POTcNHPHtrB6-6MKsXvcti0VkYprWK7f0S9xNm7FYK8 */}
                {/* <p>Rating: {pokemon.rating}</p> */}
            </div></>}
        </>
    );
}
 
export default Card;
import Card from "./Card";

const HandCards = ({userHand, setUserHand, selectedCard, setSelectedCard, gameState, handleRound, inHand}) => {
    return (  
        <div className="flex gap-5 ">
            {userHand.map((pokemon) => {
                return (
                    <div className="">
                        <Card key={pokemon.id} pokemon={pokemon} userHand={userHand} setUserHand={setUserHand} selectedCard={selectedCard} setSelectedCard={setSelectedCard} gameState={gameState} handleRound={handleRound} inHand={inHand}/>
                    </div>
                )
            })}
        </div>
    );
}
 
export default HandCards;
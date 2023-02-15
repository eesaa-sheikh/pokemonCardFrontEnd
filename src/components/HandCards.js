import Card from "./Card";

const HandCards = ({userHand, setUserHand, selectedCard, setSelectedCard, gameState,handleRound}) => {
    return (  
        <div className="flex gap-5">
            {userHand.map((pokemon) => {
                return (
                    <div>
                        <Card key={pokemon.id} pokemon={pokemon} userHand={userHand} setUserHand={setUserHand} selectedCard={selectedCard} setSelectedCard={setSelectedCard} gameState={gameState} handleRound={handleRound}/>
                    </div>
                )
            })}
        </div>
    );
}
 
export default HandCards;
import Card from "./Card";

const HandCards = ({cards, selectedCard, setSelectedCard}) => {
    return (  
        <div className="flex gap-5">
            {cards.map((pokemon) => {
                return (
                    <div>
                        <Card key={pokemon.id} pokemon={pokemon} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
                    </div>
                )
            })}
        </div>
    );
}
 
export default HandCards;
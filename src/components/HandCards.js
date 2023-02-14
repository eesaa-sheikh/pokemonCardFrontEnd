import Card from "./Card";

const HandCards = ({cards}) => {
    return (  
        <div className="flex">
            {cards.map((pokemon) => {
                return (
                    <div>
                        <Card key={pokemon.id} pokemon={pokemon}/>
                    </div>
                )
            })}
        </div>
    );
}
 
export default HandCards;
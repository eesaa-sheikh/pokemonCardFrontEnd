import Card from "./Card";

const PokedexList = ({pokedex}) => {

    return ( 
        <>
            {pokedex.map((pokemon) => {
                return (
                    <>
                        <Card key={pokemon.id} pokemon={pokemon}/>
                        <hr/>
                    </>
                )
            })}
        </>
    );
}
 
export default PokedexList;
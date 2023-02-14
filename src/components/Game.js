import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Game = ({user}) => {
    
    const SERVER_URL = "http://localhost:8080/accounts"

    const {id} = useParams();

    const [opponent, setOpponent] = useState("");

    useEffect(() => {
        fetch(`${SERVER_URL}/${id}`)
        .then(response => response.json())
        .then(data => setOpponent(data));

    }, [id])
    
    return ( 
        <>
            <p>{opponent.trainerTitle} {opponent.username}</p>
        </>
    );
}
 
export default Game;
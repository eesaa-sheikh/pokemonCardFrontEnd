import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AccountContext } from "../App";
import Card from "./Card";
import HandCards from "./HandCards";

const Game = ({user}) => {

    const account = useContext(AccountContext);

    const SERVER_URL = "http://localhost:8080/accounts"

    const {id} = useParams();

    const [opponent, setOpponent] = useState("");

    useEffect(() => {
        fetch(`${SERVER_URL}/${id}`)
        .then(response => response.json())
        .then(data => setOpponent(data));
    }, [id, account])

    const [opponentDeck, setOpponentDeck] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/cards/account/${id}/deck`)
        .then(response => response.json())
        .then(data => setOpponentDeck(data));
    }, [id, account])

    const [userDeck, setUserDeck] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/cards/account/${account.id}/deck/shuffle`)
        .then(response => response.json())
        .then(data => setUserDeck(data));
    }, [id, account])

    const [userHand, setUserHand] = useState([]);
    const [opponentHand, setOpponentHand] = useState([]);

    useEffect(() => {
        if (userDeck) {
            setUserHand(userDeck.slice(0, 5));
        }
        if (opponentDeck) {
            setOpponentHand(opponentDeck.slice(0,5));
        }
    }, [id, userDeck, account, opponentDeck]) // might not need account, will see later

    const [selectedCard, setSelectedCard] = useState("");
    
    return ( 
        <>
            <p>{opponent.trainerTitle} {opponent.username} VS {account.trainerTitle} {account.username}</p>
            <div className="scale-50">
                <HandCards userHand={opponentHand}/>
            </div>
                {/* OpponentCard */}

                {selectedCard ? <Card pokemon={selectedCard} selectedCard={selectedCard}/> : <></> }
                {/* YourCard */}
            <div className="scale-50">
                <HandCards userHand={userHand} setUserHand={setUserHand} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
            </div>
           
            {console.log(opponentHand)}
            {console.log(userHand)}
        </>
    );
}
 
export default Game;
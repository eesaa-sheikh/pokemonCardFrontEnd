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
    const [gameState, setGameState] = useState("");

    useEffect(() =>{
        fetch(`http://localhost:8080/games?playerAId=${account.id}&playerBId=${id}`,
        {method: "POST",
        headers: {'Content-Type': 'application/json'}
            })
        .then ((response)=> response.json())
        .then ((response)=> {setGameState(response)})
        console.log(gameState);
        // const newGame = await response.json()
        },[]) 
    



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
        if (userDeck.length===11) {
            const newHand = userDeck.slice(0, 5);
            setUserHand(newHand)

            const newDeck = userDeck.slice(5);
            setUserDeck(newDeck);
            
        }
    }, [id, account, userDeck]) // might not need account, will see later
   
    useEffect(() => {
        if (opponentDeck.length===11) {
            const newHand = opponentDeck.slice(0, 5);
            setOpponentHand(newHand)

            const newDeck = opponentDeck.slice(5);
            setOpponentDeck(newDeck);
            
        }
    }, [id, account, opponentDeck])

    // useEffect(() => {
    //     console.log(userHand,"user hand");
    //     console.log(opponentHand, "opponent hand");

    //     if (userHand.length===5) {

    //         const newDeck = userDeck.slice(5);
    //         setUserDeck(newDeck);

    //         console.log(newDeck,"user deck");
            
    //     }
    //     if (opponentHand.length===5) {
    //         const newDeck = opponentDeck.slice(5);
    //         setOpponentDeck(newDeck);

    //         console.log(newDeck,"opponent deck");
    //     }

    // }, [id, account,userHand,opponentHand])

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
           
            {/* {console.log(opponentHand, "hand 1")}
            {console.log(userHand, "hand 2")}
            {console.log(opponentDeck, "hand 3")}
            {console.log(userDeck, "hand 4")} */}
        </>
    );
}
 
export default Game;
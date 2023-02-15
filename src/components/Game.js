import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AccountContext } from "../App";
import Card from "./Card";
import HandCards from "./HandCards";

const Game = ({user}) => {

    const account = useContext(AccountContext);

    const SERVER_URL = "http://localhost:8080/accounts"

    const {id} = useParams();

    // GAME SETUP

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

    // END OF GAME SET UP

    // Function for checking player turn

    const [selectedStat, setSelectedStat] = useState("");
    console.log(selectedStat)

    const [selectedCard, setSelectedCard] = useState("");
    
    // let opponentPlayStat
    // let userPlayStat
    // let opponentPlayTypeId
    // let userPlayTypeId
    // if (opponentHand.length > 0 && selectedCard !== "") {
    //     opponentPlayStat = opponentHand[0][selectedStat];
    //     opponentPlayTypeId = opponentHand[0].type.id
    //     userPlayStat = selectedCard[selectedStat];
    //     userPlayTypeId = selectedCard.type.id
    // }
    // console.log(opponentPlayStat);
    // console.log(userPlayStat);
    // console.log(opponentPlayTypeId)
    // console.log(userPlayTypeId)
    // console.log(gameState.id)

    const handleRound = ((selectedStat) => {
        
        if (opponentHand.length > 0 && selectedCard !== "") {
            const opponentPlayStat = opponentHand[0][selectedStat];
            const opponentPlayTypeId = opponentHand[0].type.id
            const userPlayStat = selectedCard[selectedStat];
            const userPlayTypeId = selectedCard.type.id
            
            fetch(`http://localhost:8080/games/${gameState.id}?statA=${userPlayStat}&statB=${opponentPlayStat}&typeAId=${userPlayTypeId}&typeBId=${opponentPlayTypeId}`,
                {method: "PATCH",
                headers: {'Content-Type': 'application/json'}
                })
            .then ((response)=> response.json())
            .then ((response)=> {setGameState(response)})
            
            setSelectedCard("");
        }
        
    })

    // Opponent Plays First Card in Hand -------------
    // After game is updated
    // Add indicators of Player A score and Player B score and round number(+1) to visual representation to screen
    // Discard opponent card
    // Opponent and user's hand is updated with the next card in deck
    // Display winner when gameState.winner !== ""
    
    useEffect(() => {
        console.log(gameState, "game state");
    }, [gameState])

    return ( 
        <>
            <p>{account.trainerTitle} {account.username} VS {opponent.trainerTitle} {opponent.username}</p>
            <div className="scale-50">
                <HandCards userHand={opponentHand}/>
            </div>
                {/* OpponentCard */}

                {selectedCard ? <Card pokemon={selectedCard} selectedCard={selectedCard} handleRound={handleRound} gameState={gameState}/> : <></> }
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
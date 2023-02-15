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

    const [selectedCard, setSelectedCard] = useState("");

    const [oppSelectedCard, setOppSelectedCard] = useState("");

    const [beginningRound, setBeginningRound] = useState(true);

    useEffect(() => {
        
        // on page load, oppHand empty: 
        // we want oppHand to set itself, when loaded

        if (beginningRound) {
            setOppSelectedCard(opponentHand[0]);
            console.log(opponentHand, "beggining round");
            const newOppHand = opponentHand.filter(item => item !== oppSelectedCard);
            setOpponentHand(newOppHand);
            setBeginningRound(false);
        }
    }, [opponentHand, userHand, beginningRound])
    
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
    
    // handle Player A
    const handleRound = ((selectedStat) => {
        
        // console.log(oppSelectedCard);
        let opponentPlayStat;
        const opponentPlayTypeId = opponentHand[0].type.id;

        let userPlayStat;
        const userPlayTypeId = selectedCard.type.id;

        if (gameState.playerATurn) {    
            if (opponentHand.length > 0 && selectedCard !== "") {

                userPlayStat = selectedCard[selectedStat];
                opponentPlayStat = oppSelectedCard[selectedStat];
                
                fetch(`http://localhost:8080/games/${gameState.id}?statA=${userPlayStat}&statB=${opponentPlayStat}&typeAId=${userPlayTypeId}&typeBId=${opponentPlayTypeId}`,
                    {method: "PATCH",
                    headers: {'Content-Type': 'application/json'}
                    })
                .then ((response)=> response.json())
                .then ((response)=> {setGameState(response)})
                
                setSelectedCard("");
                setOppSelectedCard("");
            }
        }
         
        if (!gameState.playerATurn) {
            
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
            <div className="flex">
                {/* OpponentCard */}
                {oppSelectedCard ? <Card oppSelectedCard={oppSelectedCard} setOppSelectedCard={oppSelectedCard} handleRound={handleRound} gameState={gameState} opponentHand={opponentHand} setOpponentHand={setOpponentHand}/> : <></> }
                
                {/* YourCard */}
                {selectedCard ? <Card pokemon={selectedCard} selectedCard={selectedCard} handleRound={handleRound} gameState={gameState}/> : <></> }
            </div>
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
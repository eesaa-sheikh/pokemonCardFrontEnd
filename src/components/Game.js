import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { AccountContext } from "../App";
import Card from "./Card";
import HandCards from "./HandCards";

const Game = ({user}) => {

    const account = useContext(AccountContext);

    const SERVER_URL = "http://localhost:8080/accounts"

    const {id} = useParams();

    const deckLength =11;
    const navigate = useNavigate();

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
    const [reward, setReward] = useState("");


    useEffect(() => {
        if (userDeck.length===deckLength) {
            const newHand = userDeck.slice(0, 5);
            setUserHand(newHand)

            const newDeck = userDeck.slice(5);
            setUserDeck(newDeck);
            
        }
    }, [id, account, userDeck]) // might not need account, will see later
   
    useEffect(() => {
        if (opponentDeck.length===deckLength) {
            const newHand = opponentDeck.slice(0, 5);
            setOpponentHand(newHand)

            const newDeck = opponentDeck.slice(5);
            setOpponentDeck(newDeck);

            const newReward = opponentDeck.slice(deckLength-1, deckLength)[0];
            setReward(newReward);

        }
    }, [id, account, opponentDeck])

    // END OF GAME SET UP

    // Function for checking player turn

    const [selectedStat, setSelectedStat] = useState("");

    const [selectedCard, setSelectedCard] = useState("");
    const [oppSelectedCard, setOppSelectedCard] = useState("");
    
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

    const handleTimeOutBeforeRound = ((selectedStat) => {
        
        setOppSelectedCard(opponentHand[0]);
        const newHand = opponentHand.filter(item => item !== opponentHand[0]);
        setOpponentHand(newHand);
        let timeout = setTimeout(function(){handleRound(selectedStat);}, 3000);
        let timeouttwo = setTimeout(function(){
            setSelectedCard("");
            setOppSelectedCard("");
            
            if (userDeck.length >= 1) {
                setUserHand(userHand.concat(userDeck[0]));
                const newUserDeck = userDeck.slice(1);
                setUserDeck(newUserDeck);
            }
            
            if (opponentDeck.length >= 1) {
                setOpponentHand(newHand.concat(opponentDeck[0]));
                const newOpponentDeck = opponentDeck.slice(1);
                setOpponentDeck(newOpponentDeck);
            
            }
           
            console.log(userDeck);
            console.log(opponentDeck);
        
            setSelectedStat("");
        }, 3100);
    })

    const handlePostRound =((response) =>{
        setGameState(response);
        if(response.winner === account.username){
            fetch(`http://localhost:8080/ownerships/${account.id}/${reward.id}?inDeck=false`,
            {method: "POST",
            headers: {'Content-Type': 'application/json'}
            })
        }
    })

    const handleRound = ((selectedStat) => {

        let userPlayStat
        let opponentPlayStat
        const opponentPlayTypeId = opponentHand[0].type.id
        const userPlayTypeId = selectedCard.type.id

        // if (gameState.playerATurn ) {
            
        opponentPlayStat = opponentHand[0][selectedStat];
        userPlayStat = selectedCard[selectedStat];

        fetch(`http://localhost:8080/games/${gameState.id}?statA=${userPlayStat}&statB=${opponentPlayStat}&typeAId=${userPlayTypeId}&typeBId=${opponentPlayTypeId}`,
            {method: "PATCH",
            headers: {'Content-Type': 'application/json'}
            })
        .then ((response)=> response.json())
        .then ((response)=> {handlePostRound(response)})
    
    })

    
    // Opponent Plays First Card in Hand -------------
    // After game is updated 
    // Add indicators of Player A score and Player B score and round number(+1) to visual representation to screen
    // Discard opponent card
    // Opponent and user's hand is updated with the next card in deck
    // Display winner when gameState.winner !== ""
    
    // useEffect(() => {
    //     console.log(gameState, "game state");
    // }, [gameState])

    return ( 
        <>
            <div>
                <p>{account.username}: {gameState.scoreA} </p>
                <p>{account.trainerTitle} {account.username} VS {opponent.trainerTitle} {opponent.username}</p>
                <p>{opponent.username}: {gameState.scoreB} </p>
            </div>
            {gameState.winner !== "" && gameState.winner !== "Tie"? <p>Winner: {gameState.winner}</p> : <></>}
            {gameState.winner === "Tie" ? <p> {gameState.winner}</p> : <></>}
            {selectedStat !== "" ? <p>{gameState.playerATurn ? account.username : opponent.username} chose {selectedStat}!</p> : <div></div>}
            {gameState.winner === "" ?<div className="scale-50">
                <HandCards userHand={opponentHand}/>
            </div> : <></>}
            {gameState.winner === "" ? <div className="flex">
                {/* OpponentCard */}
                {console.log(oppSelectedCard)}
                {oppSelectedCard ? <Card pokemon={oppSelectedCard} selectedCard={oppSelectedCard} handleRound={handleRound} gameState={gameState}/> : <></> }
                {/* YourCard */}
                {selectedCard ? <Card pokemon={selectedCard} selectedCard={selectedCard} handleRound={handleRound} handleTimeOutBeforeRound={handleTimeOutBeforeRound} gameState={gameState} setSelectedStat={setSelectedStat}/> : <></> }
            </div> : <></>}
            {gameState.winner === "" ? <div className="scale-50">
                <HandCards userHand={userHand} setUserHand={setUserHand} selectedCard={selectedCard} setSelectedCard={setSelectedCard} gameState={gameState} handleRound={handleRound}/>
            </div> : <></>}

            {gameState.winner !== "" ?<div className="endGameScreen">
                <div>
                    <img src= "https://pbs.twimg.com/media/EWCNVF8WkAA2b_t.png" alt="opponent"/>
                </div>
                <div>
                    {gameState.winner === account.username ?<p>Reward</p>: <></>}
                    {reward !== "" && gameState.winner === account.username? <Card key={reward.id} pokemon={reward}/>: <></>}
                    <hr/>
                </div>
                <div className="endGameText">
                    {gameState.winner === "Tie"? <p>That was a close battle!</p>: <></>}
                    {gameState.winner === account.username ? <p>You are stronger than I thought!</p>: <></>}
                    {gameState.winner === opponent.username ? <p>Better luck next time</p>: <></>}
                    <button onClick={()=>navigate("/")}>Home</button>
                </div>
            </div>: <></>}
           
            

            {/* {console.log(opponentHand, "hand 1")}
            {console.log(userHand, "hand 2")}
            {console.log(opponentDeck, "hand 3")}
            {console.log(userDeck, "hand 4")} */}
        </>
    );
}
 
export default Game;
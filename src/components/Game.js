import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { AccountContext } from "../App";
import Card from "./Card";
import HandCards from "./HandCards";
import battlePodium from "../PokemonTypeAsset/battlePodium.png";

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
        let timeout = setTimeout(function(){handleRound(selectedStat);}, 4000);
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
        }, 4100);
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
            
            {/* <p>{account.trainerTitle} {account.username} VS {opponent.trainerTitle} {opponent.username}</p> */}
            {/* <p>{account.username}: {gameState.scoreA} </p>
            <p>{opponent.username}: {gameState.scoreB} </p> */}
            {gameState.winner !== "" && gameState.winner !== "Tie"? <p>Winner: {gameState.winner}</p> : <></>}
            {gameState.winner === "Tie" ? <p> {gameState.winner}</p> : <></>}

            
            <div className="flex h-[100vh] bg-[url('https://images.gamebanana.com/img/ss/mods/5f3ad2ae45e16.jpg')] bg-cover">
                <div className="w-[20vw] z-50">

                </div>

                <div className="flex flex-col w-[60vw] mx-auto z-50">


                    <div className="text-white text-center h-[60px] flex-col">

                        <div className="flex mt-5">
                            <div className="w-[44%] text-2xl text-right"><p className="mx-auto my-auto">{opponent.trainerTitle} <span className=""></span></p></div>
                            <div className="w-[12%] text-2xl"><p className="mx-auto my-auto">VS</p></div>
                            <div className="w-[44%] text-2xl text-left"><p className="mx-auto my-auto"> {account.trainerTitle} <span className=""></span></p></div>
                        </div>
                        <div className="flex">
                            <div className="w-[44%] text-right"><p className="mx-auto my-auto text-5xl"><span className=" font-extrabold">{opponent.username}</span></p></div>
                            <div className="w-[12%]"><p className="mx-auto my-auto text-5xl">{gameState.scoreB} : {gameState.scoreA}</p></div>
                            <div className="w-[44%] text-left"><p className="mx-auto my-auto text-5xl"><span className=" font-extrabold">{account.username}</span></p></div>
                        </div>

                        {/* <p className="mx-auto mt-5 my-auto">{account.trainerTitle} {account.username} VS {opponent.trainerTitle} {opponent.username}</p>
                        <p className="mx-auto my-auto text-3xl"><span className=" font-extrabold">{account.username}</span> {gameState.scoreA} : {gameState.scoreB} <span className="font-extrabold">{opponent.username}</span></p> */}
                        {/* {selectedStat !== "" ? <p className="font-bold">{gameState.playerATurn ? account.username : opponent.username} chose {selectedStat}!</p> : <div></div>} */}
                    </div>


                    {gameState.winner === "" ?<div className="scale-[70%] h-[200px] origin-bottom-left">
                        <HandCards userHand={opponentHand} inHand={true} isOpponent={true}/>
                    </div>:<></>}

                            

                    {gameState.winner === "" ?<div className="flex h-[50vh] mt-5 mx-auto z-50">
                        {/* OpponentCard */}
                        {console.log(oppSelectedCard)}
                        <div className="my-auto text-center">
                            {!gameState.playerATurn ? <p className="mb-5 text-transparent drop-shadow-md shadow-white font-extrabold text-3xl -mt-6 animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400  bg-clip-text">{opponent.username}'s turn</p> : 
                            
                            <p className="mb-5 text-transparent drop-shadow-md shadow-white font-light text-3xl -mt-6 animate-text-moving-background transition-all ease-in-out duration-200">Your turn</p>}
                            
                            <img src={opponent.spriteNumber} className="h-[300px] relative z-10 mx-auto" alt={`${opponent.username} battle sprite`}/>
                            <img src={battlePodium} className="w-[300px] -translate-y-10 -z-10" alt="battle podium"/>
                            {gameState.playerATurn ? <p className="w-[300px] text-transparent font-bold text-3xl -mt-6">{opponent.username}'s turn to pick a <span className="font-bold">stat</span></p> : <p className="w-[300px] text-transparent drop-shadow-md shadow-black font-bold text-3xl -mt-6  animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">{opponent.username}'s turn to pick a stat</p> }
                        </div>
                        <div className="w-[15vw] scale-125 mr-2 my-auto text-center">
                            {oppSelectedCard ? <Card pokemon={oppSelectedCard} selectedCard={oppSelectedCard} handleRound={handleRound} gameState={gameState} selectedStat={selectedStat} oppPlayedCard={true}/> : <></> }
                            {selectedStat ? <p className="text-white mt-5 text-xl z-50">{selectedStat.charAt(0).toUpperCase() + selectedStat.substring(1)}: <span className="font-bold">{oppSelectedCard[selectedStat]}</span></p> : <p className="mt-5 text-xl text-transparent">selectedStat</p>}
                            {selectedCard && oppSelectedCard ? oppSelectedCard.type.strongAgainst.includes(selectedCard.type.name) ? <p className="text-white">{oppSelectedCard.type.name} is <span className="font-extrabold text-transparent animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">super-effective</span> against {selectedCard.type.name}!</p> : oppSelectedCard.type.weakAgainst.includes(selectedCard.type.name) ? <p className="text-white">{oppSelectedCard.type.name} is <span className="italic">not very effective</span> against {selectedCard.type.name}...</p> : <p className="text-transparent">Hi</p> : <p className="text-transparent">Hi</p>}
                        </div>
                        
                        {/* YourCard */}
                        <div className="w-[15vw] scale-125 ml-2 my-auto text-center">
                            {selectedCard ? <Card pokemon={selectedCard} selectedCard={selectedCard} handleRound={handleRound} handleTimeOutBeforeRound={handleTimeOutBeforeRound} gameState={gameState} selectedStat={selectedStat} setSelectedStat={setSelectedStat}/> : <></> }
                            {selectedStat ? <p className="text-white mt-5 text-xl z-50">{selectedStat.charAt(0).toUpperCase() + selectedStat.substring(1)}: <span className="font-bold">{selectedCard[selectedStat]}</span></p> : <p className="mt-5 text-xl text-transparent">selectedStat</p>}
                            {/* {selectedCard && oppSelectedCard ? selectedCard.type.strongAgainst.includes(oppSelectedCard.type.name) ? <p className="text-white">{selectedCard.type.name} is super-effective against {oppSelectedCard.type.name}!</p> : <p className="text-transparent">Hi</p> : <p className="text-transparent">Hi</p>}
                            {selectedCard && oppSelectedCard ? selectedCard.type.weakAgainst.includes(oppSelectedCard.type.name) ? <p className="text-white">{selectedCard.type.name} is not very effective against {oppSelectedCard.type.name}...</p> : <p className="text-transparent">Hi</p> : <p className="text-transparent">Hi</p>} */}
                            {selectedCard && oppSelectedCard ? selectedCard.type.strongAgainst.includes(oppSelectedCard.type.name) ? <p className="text-white">{selectedCard.type.name} is <span className="font-extrabold text-transparent animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">super-effective</span> against {oppSelectedCard.type.name}!</p> : selectedCard.type.weakAgainst.includes(oppSelectedCard.type.name) ? <p className="text-white">{selectedCard.type.name} is <span className="italic">not very effective</span> against {oppSelectedCard.type.name}...</p> : <p className="text-transparent">Hi</p> : <p className="text-transparent">Hi</p>}

                        </div>
                        <div className="my-auto text-center" >
                            {gameState.playerATurn ? <p className="mb-5 text-transparent drop-shadow-md shadow-white font-extrabold text-3xl -mt-6 animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400  bg-clip-text">Your turn</p> : 
                            
                            <p className="mb-5 text-transparent drop-shadow-md shadow-white font-light text-3xl -mt-6 animate-text-moving-background transition-all ease-in-out duration-200">Your turn</p>}
                            
                            <img src={account.spriteNumber} className="h-[300px] relative z-10" alt={`${account.username} battle sprite`}/>
                            <img src={battlePodium} className="w-[300px] -translate-y-10 -z-10" alt="battle podium"/>
                            {gameState.playerATurn ? selectedCard === "" ? <p className="pulsingGameText text-transparent drop-shadow-md shadow-white font-light text-3xl -mt-6 animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-white to-sky-100 bg-clip-text">Pick a <span className="font-extrabold text-transparent animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">card</span></p> : 
                            
                            <p className="pulsingGameText text-transparent drop-shadow-md shadow-white font-light text-3xl -mt-6 animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-white to-sky-100 bg-clip-text">Pick a <span className="font-extrabold text-transparent animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">stat</span></p>
                            
                            : selectedCard === "" ? <p className="text-white pulsingGameText font-light text-3xl -mt-6">Pick a <span className="font-extrabold text-transparent animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">card only</span></p> : oppSelectedCard === "" ? <p className="text-white pulsingGameText font-light text-3xl -mt-6"><span className="font-extrabold text-transparent animate-text-moving-background transition-all ease-in-out duration-200 bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-400 bg-clip-text">Click card to play</span></p> : <p className="text-white pulsingGameText font-light text-3xl -mt-6"><span className="font-extrabold text-transparent ">Click card to play</span></p> }

                        </div>
                        
                    </div>:<></>}


                    {gameState.winner === "" ?<div className="scale-[70%] h-[200px] origin-top-right z-50 translate-x-36">
                        <HandCards userHand={userHand} setUserHand={setUserHand} selectedCard={selectedCard} setSelectedCard={setSelectedCard} gameState={gameState} handleRound={handleRound} inHand={true}/>
                    </div>:<></>}

                    {gameState.winner !== "" ?<div >
                        <div className="endGameScreen">
                            <img src= "https://avatars.githubusercontent.com/u/35168987?s=280&v=4" alt="opponent"/>
                            {reward !== "" && gameState.winner === account.username? <Card className="endGameScreen" key={reward.id} pokemon={reward}/>: <></>}
                            <hr/>
                        </div>
                    
                        <div className="endGameText">
                            {gameState.winner === "Tie"? <p>That was a close battle!<i></i></p>: <></>}
                            {gameState.winner === account.username ? <p>You are stronger than I thought!<i></i></p>: <></>}
                            {gameState.winner === opponent.username ? <p>Better luck next time<i></i></p>: <></>}
                        <button onClick={()=>navigate("/")}><p className="homeB">Home</p></button>
                        </div>
                    </div>: <></>}


                </div>

                

                <div className="w-[20vw]">

                </div>
                <div className="bgOverlay"></div>

            </div>

            {/* {console.log(opponentHand, "hand 1")}
            {console.log(userHand, "hand 2")}
            {console.log(opponentDeck, "hand 3")}
            {console.log(userDeck, "hand 4")} */}
        </>
    );
}
 
export default Game;
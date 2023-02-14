import { useContext } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { AccountContext } from "../App";
import GameContainer from "./GameContainer";
import PokedexContainer from "./PokedexContainer";

const HomeContainer = () => {
    
    const account = useContext(AccountContext);
    
    // Check if user logged in
    // if not, prompt user to login 
    // then display all options ()

    return ( 
        <>
            <Link to="/">Home</Link>
            <Link to="/game">Play</Link>
            <Link to="/pokedex">Pokedex</Link>

            <Routes>
                <Route path="/pokedex" element={<PokedexContainer/>}/>
                <Route path="/game" element={<GameContainer/>}/>
            </Routes>
        </>
    );
}
 
export default HomeContainer;
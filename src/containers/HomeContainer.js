import { dividerClasses } from "@mui/material";
import { useContext } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { AccountContext } from "../App";
import GameContainer from "./GameContainer";
import PokedexContainer from "./PokedexContainer";
import bgImage from "../PokemonTypeAsset/PokemonOverlay.png"

const HomeContainer = () => {
    
    const account = useContext(AccountContext);
    
    // Check if user logged in
    // if not, prompt user to login 
    // then display all options ()


    return ( 
        <>
         <div className="overlay z-50"></div>  
         <div className="w-screen bg-slate-600 h-100vh">
            
            {/* <img src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" width ={400} className ="pokemonLogo"/> */}
            <div className="">
            <img className="overlay " src={bgImage}/>
            </div>
        </div>

            
        </>
    );
}
 
export default HomeContainer;
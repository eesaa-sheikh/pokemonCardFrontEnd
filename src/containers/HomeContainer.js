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

         <div className="overlay z-50" id="aa"></div>
        <div className="background-image: url(https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-64.jpg) w-screen bg-slate-600 h-100vh" id="testing"> 
        {/* <img src="https://images8.alphacoders.com/875/875827.jpg" id="memea"/> */}
       
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/1200px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png" width ={1000} className ="pokemonLogo"/>
            <div className="">
            <img className="logo" src={bgImage} id="logoP"/>
            {/* <img className="" src= "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"/> */}

            </div>
</div>

            
        </>
    );
}
 
export default HomeContainer;
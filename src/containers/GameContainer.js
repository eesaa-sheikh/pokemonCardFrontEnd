import { useEffect, useState } from "react";
import OppsSelect from "./OppsSelect";
import Game from "../components/Game";

const GameContainer = () => {

    const [opp, setOpp] = useState("");

    return ( 
        <>


            {opp === "" ? <OppsSelect setOpp={setOpp}/> : <Game/>}

        </>
    );
}
 
export default GameContainer;
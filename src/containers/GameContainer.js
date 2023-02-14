import { useEffect, useState } from "react";
import OppsSelect from "./OppsSelect";
import Game from "../components/Game";

const GameContainer = () => {

    const [opps, setOpps] = useState("");

    return ( 
        <>
            {<OppsSelect setOpps={setOpps}/>}
        </>
    );
}
 
export default GameContainer;
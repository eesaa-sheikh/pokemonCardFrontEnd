import { Link } from "react-router-dom";
import AccountList from "./AccountList";
import React, { useEffect, useRef } from 'react'


const AccountCard = ({acc, setOpp, props}) => {


    

    // handleClick()

    return ( 
        <> 
        <Link to={`playgame/${acc.id}`}>     
        <div className={`relative flex ]`}
        enableRotate
        enableTransform
        style = {{
                                                    width: "6.3cm",
                                                    height: "8.8cm", 
                                                    backgroundSize: "cover", 
                                                    backgroundPosition:"center",
                                                    border: "10px solid black",
                                                    borderRadius: "10px",
                                                    position: "relative",
                                                    fontFamily: "'Roboto', sans-serif"}}>
            <img className="w-[6.3cm] object-cover" src={require(`../TrainerAsset/${acc.username}.jpg`)}/>
             {/* <button onClick={console.log(acc)}>PLAY</button> */}
        </div>
       </Link>
        </> 
    );
}

//bg-[url('../TrainerAsset/${acc.username}.jpg')
//backgroundImage : `url(require(../TrainerAsset/${acc.username}.jpg))`

export default AccountCard;       
    // <div className = "trainerCard" style = {{backgroundImage : `url= {require(../TrainerAsset/${acc.username}.jpg)`,
    //                                                 width: "6.3cm",
    //                                                 height: "8.8cm", 
    //                                                 backgroundSize: "cover", 
    //                                                 backgroundPosition:"center",
    //                                                 border: "10px solid",
    //                                                 borderRadius: "10px",
    //                                                 position: "relative",
    //                                                 fontFamily: "'Roboto', sans-serif"}}>
    // <img className=" object-cover" src= {require(`../TrainerAsset/${acc.username}.jpg`)}/>   
    //     </div>  

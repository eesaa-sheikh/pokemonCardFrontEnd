import { mobileStepperClasses } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import Game from './components/Game';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import OppsSelect from './containers/OppsSelect';
import PokedexContainer from './containers/PokedexContainer';
import { motion } from 'framer-motion';


const AccountContext = createContext();  

function App() {
  
  const [account, setAccount] = useState("");
  const [allAccounts, setAllAccounts] = useState([])

  useEffect(() => {
    const fetchData = async() => {
        const response = await fetch("http://localhost:8080/accounts")
        const data = await response.json();
        setAllAccounts(data);
    }
    fetchData()
  }, [])
  
  const logInToAnAccount = async (accountName, accountPassword) => {
    let check = false;
    for(const accountInList of allAccounts){
      if((accountInList.username===accountName)&(accountInList.password===accountPassword)){
        setAccount(accountInList);
        check= true;
      }
    }
    return check;
  };

  const [mousePosition, setMousePosition] = useState ({

    x: 0,
    y: 0
  });

  console.log(mousePosition)


  const [cursorVariant,setCursorVariant] = useState("default")
  useEffect(() =>{
    const mouseMove = e => {
      setMousePosition({

        x: e.clientX,
        y: e.clientY
      })



    }

    window.addEventListener("mousemove",mouseMove)

    return () => {
      window.removeEventListener("mousemove",mouseMove);
    }
  }, [])


  // const logInToAnAccount = async (accountName, accountPassword) => {
  //   const response = await fetch(`http://localhost:8080/accounts/login?name=${accountName}&password=${accountPassword}`)
  //   const data = await response.json()
  //   setAccount(data);
  // };


  const variants ={
    default: {
      x: mousePosition.x -16,
      y: mousePosition.y - 16
    },
    text: {
      height:150,
      width: 150,
      x: mousePosition.x-75,
      y: mousePosition.y-75,
      backgroundColor: "blue"
    }
  }

  const textEnter =() => setCursorVariant("text");
  const textLeave =() => setCursorVariant("default");

  return (
    <>
      <AccountContext.Provider value={account}>
        <BrowserRouter>
            

        <div className='helloWill'>          
            {account !== "" ?<img src ="https://cdn-icons-png.flaticon.com/512/287/287226.png" width={75} className ="icon"/>:<></>}
            {account !== "" ? <p className='acc'>Hello {account.username}</p>:<></>}
        </div>
          <header className='navBar'>
            <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className ="home" to="/">Home</Link>
            {account !== "" ? <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className ="home" to="/game">Play</Link> :<></>}
            {account !== "" ? <Link  onMouseEnter={textEnter} onMouseLeave={textLeave}className ="home" to="/pokedex">Pokedex</Link> :<></>}
            {account === "" ?<Link onMouseEnter={textEnter} onMouseLeave={textLeave} className ="home" to="/register">Login</Link>:<></>}
            {account !== "" ? <button onClick={()=>setAccount("")}><Link  onMouseEnter={textEnter} onMouseLeave={textLeave} className ="home" to="/">Logout</Link></button> :<></>}
        </header>
        <div className="mainContainer">
          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/pokedex" element={<PokedexContainer account={account}/>}/>
            <Route path="/game" element={<OppsSelect/>}/>
            <Route path="/game/playgame/:id" element={<Game account={account}/>}/>
            <Route path="/register" element={<LoginContainer logInToAnAccount={logInToAnAccount}/>} /> 
          </Routes>
          </div>

          <motion.img src='https://www.freepnglogos.com/uploads/pokeball-png/pokeball-icon-download-icons-32.png' className='cursor'
          variants={variants}
          animate = {cursorVariant}
          />
          
        </BrowserRouter>
      </AccountContext.Provider>

      
    </>
  );
}

export default App;
export {AccountContext};

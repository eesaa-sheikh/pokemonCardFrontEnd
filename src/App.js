import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import Game from './components/Game';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import OppsSelect from './containers/OppsSelect';
import PokedexContainer from './containers/PokedexContainer';



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

  // const logInToAnAccount = async (accountName, accountPassword) => {
  //   const response = await fetch(`http://localhost:8080/accounts/login?name=${accountName}&password=${accountPassword}`)
  //   const data = await response.json()
  //   setAccount(data);
  // };

  return (
    <>
      <AccountContext.Provider value={account}>
        <BrowserRouter>
            

        <div className='helloWill'>
          
          <img src ="https://cdn-icons-png.flaticon.com/512/287/287226.png" width={75} className ="icon"/>
            <p className='acc'>Hello {account.username}</p>
        </div>
          <header className='navBar'>
            <Link className ="home" to="/">Home</Link>
            {account !== "" ? <Link to="/game">Play</Link> :<></>}
            {account !== "" ? <Link to="/pokedex">Pokedex</Link> :<></>}
            {account === "" ?<Link to="/register">Login</Link>:<></>}
            {account !== "" ? <button onClick={()=>setAccount("")}><Link to="/">Logout</Link></button> :<></>}
        </header>
        <div className="mainContainer">
          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/pokedex" element={<PokedexContainer/>}/>
            <Route path="/game" element={<OppsSelect/>}/>
            <Route path="/game/playgame/:id" element={<Game account={account}/>}/>
            <Route path="/register" element={<LoginContainer logInToAnAccount={logInToAnAccount}/>} /> 
          </Routes>
          </div>
          
        </BrowserRouter>
      </AccountContext.Provider>

      
    </>
  );
}

export default App;
export {AccountContext};

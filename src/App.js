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

  useEffect(() => {
    fetch("http://localhost:8080/accounts/10")
    .then(response => response.json( ))
    .then (data => setAccount(data))
  }, []);
  
  const logInToAnAccount = async (accountName, accountPassword) => {
    const response = await fetch(`http://localhost:8080/accounts/login?name=${accountName}&password=${accountPassword}`)
    const data = await response.json()
    setAccount(data);
  };

  return (
    <>
      <AccountContext.Provider value={account}>
        <BrowserRouter>
            <p>Hello {account.username}</p>
            <Link to="/">Home</Link>
            <Link to="/game">Play</Link>
            <Link to="/pokedex">Pokedex</Link>
            <Link to="/register">Login</Link>

          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/pokedex" element={<PokedexContainer/>}/>
            <Route path="/game" element={<OppsSelect/>}/>
            <Route path="/game/playgame/:id" element={<Game account={account}/>}/>
            <Route path="/register" element={<LoginContainer logInToAnAccount={logInToAnAccount}/>} /> 
          </Routes>

          
        </BrowserRouter>
      </AccountContext.Provider>
    </>
  );
}

export default App;
export {AccountContext};

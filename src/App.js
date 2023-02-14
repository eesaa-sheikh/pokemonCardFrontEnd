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
    setAccount("Brock");
  }, []);
  

  return (
    <>
      <AccountContext.Provider value={account}>
        <BrowserRouter>

            <Link to="/">Home</Link>
            <Link to="/game">Play</Link>
            <Link to="/pokedex">Pokedex</Link>

          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/pokedex" element={<PokedexContainer/>}/>
            <Route path="/game" element={<OppsSelect/>}/>
            <Route path="/game/playgame/:id" element={<Game account={account}/>}/>
          </Routes>

          
        </BrowserRouter>
      </AccountContext.Provider>
    </>
  );
}

export default App;
export {AccountContext};

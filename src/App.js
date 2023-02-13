import { createContext, useContext, useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import GameContainer from './containers/GameContainer';
import PokedexContainer from './containers/PokedexContainer';

const AccountContext = createContext();  

function App() {
  
  const [account, setAccount] = useState("");
  

  return (
    <>
      <AccountContext.Provider value={account}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<h1>Kabutops Trumps</h1>}/>
            <Route path="/pokedex" element={<PokedexContainer/>}/>
          </Routes>

          <Link to="/">Home</Link>
          <Link to="/pokedex">Pokedex</Link>
          
        </BrowserRouter>
      </AccountContext.Provider>
    </>
  );
}

export default App;

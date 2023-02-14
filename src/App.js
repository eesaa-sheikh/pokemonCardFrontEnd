import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
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

          

          <Routes>
            <Route path="/*" element={<HomeContainer/>}/>
          </Routes>

          
        </BrowserRouter>
      </AccountContext.Provider>
    </>
  );
}

export default App;
export {AccountContext};

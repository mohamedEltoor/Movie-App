import './App.css';
import './index.css';
import Header from './components/Header.js';
import Add from './components/Add.js';
import Watchelist from './components/Watchelist.js';
import Watched from './components/Watched.js';
import ContextProvider from './components/context/GlobalContext';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
  <ContextProvider>
  <Header/>
  <Routes>
  <Route path="/" element={<Watchelist/>} />
  <Route path="/watched" element={<Watched/>} />
  <Route path="/add" element={<Add/>} />
  </Routes>
  </ContextProvider>
  </Router>
  );
}

export default App;

/*
 rsync -av --progress --exclude=node_modules --delete ~/storage/shared/movies-app/ ~/movies-app/
cd ~/movies-app
npm install
npm start

*/


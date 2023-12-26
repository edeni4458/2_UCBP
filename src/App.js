import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Connect from './components/MainBarTags/Connect';
import CBnews from './components/MainBarTags/CBnews';
import About from './components/MainBarTags/About';
import "bootstrap/dist/css/bootstrap.min.css";
import BotBar from './components/Main/BotBar';
import Details from './components/Details';
import Create from './components/Create';
import './components/Main/MainBar.css'
import View from './components/View';
import Edit from './components/Edit';
import './App.css';
import Spotify from './components/MainBarTags/Spotify';
import UCBPepisodes from './components/UCBPepisodes';
import MainBar from './components/Main/MainBar';
import MainPage from './components/Main/MainPage';




function App() {


  return (
    <div className="App">
      <MainBar></MainBar>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/view" element={<View />} />
        <Route exact path='/create' element={<Create/>} />
        <Route exact path='/details/:id' element={<Details/>} />
        <Route exact path='/edit/:id' element={<Edit/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/connect' element={<Connect/>} />
        <Route exact path='/news' element={<CBnews/>} />
        <Route exact path='/episodes' element={<Spotify/>} />
        <Route exact path='/UCBP' element={<UCBPepisodes/>} />
      </Routes>
      <BotBar></BotBar>
    </div>
  );
}

export default App;

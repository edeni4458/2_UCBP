import {Routes, Route} from 'react-router-dom';

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
        <Route path="/" element={<MainPage/>}/>
        <Route path="/view" element={<View />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/news' element={<CBnews/>} />
        <Route path='/episodes' element={<Spotify/>} />
        <Route path='/UCBP' element={<UCBPepisodes/>} />
      </Routes>
      <BotBar></BotBar>
    </div>
  );
}

export default App;

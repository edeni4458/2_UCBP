import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Connect from './components/MainBarTags/connect/Connect';
import CBnews from './components/MainBarTags/cbNews/CBnews';
import About from './components/MainBarTags/about/About';
import BotBar from './components/Main/MainPageParts/botBar/BotBar';
import Details from './components/MainBarTags/details/Details';
import Create from './components/MainBarTags/create/Create';
import View from './components/MainBarTags/view/View';
import Edit from './components/MainBarTags/edit/Edit';
import Spotify from './components/MainBarTags/ucbpEpisodes/Spotify';
import UCBPepisodes from './components/MainBarTags/ucbpEpisodes/UCBPepisodes';
import MainBar from './components/Main/MainPageParts/mainBar/MainBar';
import MainPage from './components/Main/MainPageParts/mainPage/MainPage';
import ThanksModal from './components/MainBarTags/modals/ThanksModal';

import './App.css';



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
        <Route exact path='/thankyou' element={<ThanksModal/>}/>
      </Routes>
      <BotBar></BotBar>
    </div>
  );
}

export default App;

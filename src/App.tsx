import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './profile-config.json';
import ProfilePhoto from './assets/me.png';
import BlueCheck from './assets/blue-check.svg';
import Content from './Content';
import AppBar from './widgets/AppBar';
import Post from './Post';
import Login from './Login';

import { firebaseConfig } from './firebaseConfiguration';

import './Global.scss';
import './Main.scss';
import DummyData from './DummyData';

import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const imagesRef = ref(storage, 'images');
const ivyRef = ref(storage, 'images/ivy.png');
//const analytics = getAnalytics(app);

function App() {
  const [ contentData, setContentData ]         = useState();
  const [ follows, setFollows ]                 = useState(16);
  const [ followers, setFollowers ]             = useState(1538);
  const [ posts, setPosts ]                     = useState(0);
  const [ view, setView ]                       = useState("Home");
  const [ currentPostData, setCurrentPostData ] = useState({});

  console.log(ivyRef);

  useEffect(() => {
    //@ts-ignore
    setContentData(DummyData); //TODO: this will soon be fetching data from Firestore so we set it in state
    setPosts(DummyData.length);
  }, []);

  const Main = () => {
    if(!contentData) return <></>; //TODO: have a loading spinner here or something non-blank lol
    return (
      <div id="App">
        <AppBar />
        <div id="BioWrapper">
          <img className="profile-photo" src={ProfilePhoto} alt="" />
          <div className="bio-info-wrapper">
            <h2 className="user-name">{Profile.name}</h2>
            <img id="VerifiedCheck" src={BlueCheck} alt="verified blue checkmark" />
            <div id="Buttons">
              <div id="message_button" className="button" onClick={(e) => null}>
                Message
              </div>
              <div id="follow_button" className="button" onClick={(e) => {
                setFollowers((followers) => followers+1)
              }}>
                Follow
              </div>
            </div>
          </div>
        </div>

          <div id="DescriptionContainer">
            <div id="Description">
              frontend engineer x designer | photographer
              <br />
              <a href="https://github.com/AdamDavisDeveloper">github.com/adam</a>
            </div>
          </div>

          <div id="StatsContainer">
            <div id="Follows" className="stats">
              <p>Following<br /><b>{follows}</b></p>	
            </div>
            <div id="FollowedBy" className="stats">
              <p>Followers<br /><b><span id="follower_count">{followers}</span></b></p>
            </div>
            <div id="Posts" className="stats">
              <p>Posts<br /><b><span>{posts}</span></b></p>
            </div>
          </div>

          <div id="ContentContainer">
            { 
              Content({
                contentData,
                setView,
                setCurrentPostData
              })
            }
          </div>
      </div>
    )
  };

  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="post/:imageName" element={<Post ProfilePhoto={ProfilePhoto} currentPostData={currentPostData} setCurrentPostData={setCurrentPostData}/>} />
      <Route path="admin" element={<Login />} />
    </Routes>
  )
};

export default App;
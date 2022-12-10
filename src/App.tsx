import { useState, useEffect } from 'react';
import ProfilePhoto from './assets/me.png';
import BlueCheck from './assets/blue-check.svg';
import Content from './Content';
import AppBar from './widgets/AppBar';
import Post from './Post';

import './Global.scss';
import './Main.scss';
import DummyData from './DummyData';

function App() {
  const [ contentData, setContentData ]         = useState();
  const [ follows, setFollows ]                 = useState(16);
  const [ followers, setFollowers ]             = useState(1538);
  const [ posts, setPosts ]                     = useState(0);
  const [ view, setView ]                       = useState("Main");
  const [ currentPostData, setCurrentPostData ] = useState({});

  useEffect(() => {
    //@ts-ignore
    setContentData(DummyData); //TODO: this will soon be fetching data from Firestore so we set it in state
    setPosts(DummyData.length);
  }, []);

  const CurrentView = () => {
    switch(view) {
      case "Main": return <Main />
      case "Post": return <Post ProfilePhoto={ProfilePhoto} currentPostData={currentPostData} setCurrentPostData={setCurrentPostData} />;
      default: return <Main />;
    };
  };

  const Main = () => {
    return (
      <div id="App">
        <AppBar />
        <div id="BioWrapper">
          <img className="profile-photo" src={ProfilePhoto} alt="" />
          <div className="bio-info-wrapper">
            <h2 className="user-name">adam.png</h2>
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
              frontend engineer x designer | retro futurist
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

  if(!contentData) return <></>;
  return <CurrentView />
  
}

export default App;
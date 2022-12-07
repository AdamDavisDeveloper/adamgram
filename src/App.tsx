import { useState } from 'react';
import Logo from './assets/logo.svg';
import ProfilePhoto from './assets/me.png';
import BlueCheck from './assets/blue-check.svg';
import Content from './Content';

import './Main.scss'

function App() {
  const [ follows, setFollows ]     = useState(0);
  const [ followers, setFollowers ] = useState(0);
  const [ posts, setPosts ]         = useState(0);
  const [ view, setView ]           = useState("Main");

  const CurrentView = () => {
    switch(view) {
      case "Main": return <Main />
      // case "Post": return null;
      default: return <Main />;
    };
  };

  const Main = () => {
    return (
      <div id="App">
        <div className="logo-wrapper">
          <img src={Logo} alt="Adamgram logo" />
        </div>

        <div id="BioWrapper">
          <img className="profile-photo" src={ProfilePhoto} alt="" />
          <div className="bio-info-wrapper">
            <h2 className="user-name">adam</h2>
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
              frontend engineer x designer
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
            { Content() }
          </div>
      </div>
    )
  };

  return <CurrentView />
  
}

export default App;
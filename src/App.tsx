import { useState } from 'react';
import Logo from './assets/logo.svg';
import ProfilePhoto from './assets/profile.jpg';
import BlueCheck from './assets/blue-check.svg';
import DummyData from './DummyData';

import './Main.scss'

function App() {
  const [ follows, setFollows ]     = useState(0);
  const [ followers, setFollowers ] = useState(0);
  const [ posts, setPosts ]         = useState(0);
  
  const rowsExtended: number = (DummyData.length % 3 === 0) ? 0 : 1;
  //const numberOfRows: number = Math.floor(DummyData.length / 3) + rowsExtended;
  const numberOfRows: number = dataArray().length;

  function dataArray() {
    let rows = [];
    for (let i = 0; i < DummyData.length; i += 3) {
      rows.push([DummyData[i], imageExists(DummyData[i + 1]), imageExists(DummyData[i + 2]) ]);
    }
    return rows;
  }

  function imageExists(image: any | undefined) {
    if(image == undefined) return false;
    else return image;
  }

  function HTMLRows() {
    let rowsArray= [];

    for (let i = 0; i < numberOfRows; i++) {
      const imageOne    = dataArray()[i][0].imgName; 
      const imageTwo    = dataArray()[i][1].imgName;
      const imageThree  = dataArray()[i][2].imgName;

      rowsArray.push( 
        <div className="row" key={i}>
          <div className="content">
            <img src={imageOne} loading="lazy" />
          </div>
          <div className="content">
            {imageTwo && <img src={imageTwo} loading="lazy" />}
          </div>
          <div className="content">
            {imageThree && <img src={imageThree} loading="lazy" />}
          </div>
        </div> 
      );
    }
    return rowsArray;
  }

  const ContentRows = () => {
    return DummyData.map((post, i) => {
      return (
        <div className="row" key={i}>
          <div className="content">
            <img src="#" loading="lazy" />
          </div>
          <div className="content">
            <img src="#" loading="lazy" />
          </div>
          <div className="content">
            <img src="#" loading="lazy" />
          </div>
        </div>
      )
    })
  }

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
						<p>Follows<br /><b>{follows}</b></p>	
					</div>
					<div id="FollowedBy" className="stats">
						<p>Followed by<br /><b><span id="follower_count">{followers}</span></b></p>
					</div>
					<div id="Posts" className="stats">
						<p>Posts<br /><b><span>{posts}</span></b></p>
					</div>
				</div>

        <div id="ContentContainer">
          { HTMLRows() }
        </div>
    </div>
  )
}

export default App

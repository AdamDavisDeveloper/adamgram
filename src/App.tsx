import { useState } from 'react';
import Logo from './assets/logo.svg';
import ProfilePhoto from './assets/profile.jpg';
import BlueCheck from './assets/blue-check.svg';

import './Main.scss'

function App() {
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
            <div id="follow_button" className="button" onClick={(e) => null}>
              Follow
            </div>
          </div>
        </div>

        <div id="DescriptionContainer">
					<div id="description">
						a human from earth
						<br />
						<a href="https://github.com/hunterirving/Huntergram">github.com/hunterirving/Huntergram</a>
					</div>
				</div>
      </div>
    </div>
  )
}

export default App

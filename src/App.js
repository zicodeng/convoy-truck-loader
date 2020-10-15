import React from 'react';
import Typed from 'react-typed';
import ReactFullpage from '@fullpage/react-fullpage';

import { TruckLoader, FloatingHearts } from './components';

import imgJakeTruckLoader1 from './jake-truck-loader-1.gif';
import imgJakeTruckLoader2 from './jake-truck-loader-2.gif';

import 'html5-device-mockups/dist/device-mockups.min.css';
import './App.css';

function App() {
  return (
    <main className="app">
      <ReactFullpage
        sectionsColor={[
          '#0b2127',
          '#0b2127',
          '#0b2127',
          '#0b2127',
          '#0b2127',
          '#0b2127',
          '#fff',
          '#fff',
          '#3176C6',
        ]}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <h1>
                  <Typed
                    strings={[
                      'If waiting is inevitable, why not make the experience delightful?',
                    ]}
                    typeSpeed={40}
                  />
                </h1>
              </div>

              <div className="section">
                <h1>💡 Idea ① by Zico Deng 💡</h1>
              </div>

              <div className="section">
                <h1>🔥 Introduce Convoy Truck Loader 🔥</h1>
                <TruckLoader />
              </div>

              <div className="section one-loader-fits-all">
                <h1>😍 One Loader Fits All 😍</h1>
                <div
                  className="device-wrapper"
                  style={{
                    transform: 'scale(2)',
                  }}
                >
                  <div
                    className="device"
                    data-device="Macbook"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen">
                      <TruckLoader scale={0.1} />
                    </div>
                  </div>
                </div>
                <div
                  className="device-wrapper"
                  style={{
                    transform: 'scale(0.8)',
                  }}
                >
                  <div
                    className="device"
                    data-device="iPadPro"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen">
                      <TruckLoader scale={0.1} />
                    </div>
                  </div>
                </div>
                <div
                  className="device-wrapper"
                  style={{
                    transform: 'scale(0.4)',
                  }}
                >
                  <div
                    className="device"
                    data-device="iPhone7"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen">
                      <TruckLoader scale={0.1} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h1>🤩 One More Thing 🤩</h1>
              </div>

              <div className="section">
                <div className="flex">
                  <div>
                    <h1>Ship With Convoy</h1>
                    <h2>X10 Faster</h2>
                    <h2>X10 💰💰💰</h2>
                    <h2>X10 More Efficient</h2>
                  </div>
                  <TruckLoader
                    speed={10}
                    cargo={
                      <div className="packages">
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                      </div>
                    }
                  />
                </div>
                <div className="flex">
                  <div>
                    <h1>Ship With Others</h1>
                    <h2>X10 Slower</h2>
                    <h2>X10 More Frustrations</h2>
                    <h2>X10 More Carbon Emissions</h2>
                  </div>
                  <TruckLoader
                    speed={0.5}
                    primaryColor="#3176C6"
                    text="Limited Capacity & Some Waste"
                    cargo={
                      <div className="packages">
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦 📦
                        📦 📦 📦 📦 📦 📦
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="section">
                <h1 className="dark">💡 Idea ② by Jake Rossilli 💡</h1>
              </div>

              <div className="section">
                <div className="flex images">
                  <img src={imgJakeTruckLoader1} />
                  <img src={imgJakeTruckLoader2} />
                </div>
              </div>

              <div className="section">
                <h1>💖 Like & Upvote Convoy Truck Loader 💖</h1>
                <FloatingHearts />
              </div>
            </div>
          );
        }}
      />
    </main>
  );
}

export default App;

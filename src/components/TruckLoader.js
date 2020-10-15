import React from 'react';
import classNames from 'classnames';

import imgConvoyLogo from './convoy-logo.svg';

import './TruckLoader.css';

const Wheel = ({ className, speed }) => (
  <div
    className={classNames(className, 'wheel')}
    style={{
      animationDuration: `${1 / speed}s`,
    }}
  >
    <div className="spokes">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} />
      ))}
    </div>
  </div>
);

export const TruckLoader = ({
  speed = 1,
  scale = 1,
  primaryColor = '#f65335',
  text = 'Endless Capacity & Zero Waste',
  cargo = <img src={imgConvoyLogo} alt="Convoy Logo" />,
}) => {
  return (
    <div
      className="truck-loader"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <div className="truck">
        <div className="head">
          <div className="engine" />
          <div
            className="cab"
            style={{
              backgroundColor: primaryColor,
            }}
          />
          <div
            className="cab-extender"
            style={{
              backgroundColor: primaryColor,
            }}
          />
          <div className="fuel-tank" />
          <Wheel className="front-wheel" speed={speed} />
        </div>
        <div className="body">
          <div className="trailer">
            <div className="cargo-container">{cargo}</div>
            <div className="trailer-wheels">
              <div className="kingpin" />
              <div className="wheels">
                <Wheel speed={speed} />
                <Wheel speed={speed} />
              </div>
            </div>
          </div>
          <div className="connector">
            <div className="kingpin" />
            <div className="wheels">
              <Wheel speed={speed} />
              <Wheel speed={speed} />
            </div>
          </div>
        </div>
        <div className="wind">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                animationDuration: `${1 / speed}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div
        className="text"
        style={{
          animationDuration: `${2 / speed}s`,
          backgroundColor: primaryColor,
        }}
      >
        {text}
      </div>
    </div>
  );
};

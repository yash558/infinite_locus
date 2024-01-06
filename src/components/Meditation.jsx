import React, { useState, useRef } from 'react';
import  "./meditation.css"

function Meditation (){
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    setCurrentTime(current);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="app">
        <video  autoPlay loop muted ='video'>
          <source src="./assets/videos/rain.mp4" type="rain/mp4" />
        </video>
      <div className="time-select">
        <button data-time="10">2 Minutes</button>
        <button data-time="300" className="medium-mins">
          5 Minutes
        </button>
        <button data-time="600" className="long-mins">
          10 Minutes
        </button>
      </div>
      <div className="player-container">
        <audio
          ref={audioRef}
          className="song"
          onTimeUpdate={timeUpdateHandler}
        >
          <source src="./assets/sounds/rain.mp3" />
        </audio>
        <img
          src="./assets/svg/play.svg"
          className="play"
          alt="Play/Pause"
          onClick={playPauseHandler}
        />
        <svg
          className="track-outline"
          width="453"
          height="453"
          viewBox="0 0 453 453"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20" />
        </svg>
        <svg
          className="moving-outline"
          width="453"
          height="453"
          viewBox="0 0 453 453"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20" />
        </svg>
        <img src="./assests/svg/replay.svg" className="replay" alt="Replay" />
        <h3 className="time-display">{getTime(currentTime)}</h3>
      </div>
      <div className="sound-picker">
        <button data-sound="../assets/sounds/rain.mp3" data-video="./video/rain.mp4">
          <img src="../assests/svg/rain.svg" alt="Rain" />
        </button>
        <button data-sound="../assets/sounds/beach.mp3" data-video="./video/beach.mp4">
          <img src="../assets/svg/beach.svg" alt="Beach" />
        </button>
      </div>
    </div>
  );
};

export default Meditation;

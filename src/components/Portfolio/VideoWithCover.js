import React, { useState, useRef } from 'react';
import { VideoImage } from '../../const';
import './video.css';
const videoVd = require('../../video/pulse.mp4');

const VideoWithCover = () => {
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const handleVideoPlayStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setVideoPlaying(false);
  };

  return (
    <div className='video-block'>
      <video
        ref={videoRef}
        controls
        className={videoPlaying ? 'video-visible' : 'video-hidden'}
        onClick={handleVideoPlayStop}
        onEnded={handleVideoEnded} 
      >
        <source className='video' src={videoVd} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <img
        onClick={handleVideoPlay}
        className={!videoPlaying ? 'video-visible' : 'video-hidden'}
        src={VideoImage}
        alt=''
      />
    </div>
  );
};

export default VideoWithCover;
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import ControlBar from './ControlBar';
import VideoWrapper from './VideoWrapper';

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  const reactPlayerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = () => {
    setVolume((prev) => !prev);
  };
  const handleSeekForward = () => {
    if (reactPlayerRef.current) {
      reactPlayerRef.current.seekTo(
        (reactPlayerRef.current.getCurrentTime() || 0) + 10,
        'seconds',
      );
      console.log(reactPlayerRef.current.getCurrentTime());
    }
  };

  const handleSeekBackward = () => {
    if (reactPlayerRef.current) {
      reactPlayerRef.current.seekTo(
        (reactPlayerRef.current.getCurrentTime() || 0) - 10,
        'seconds',
      );
    }
  };
  {
    /* 
        todo : @godhyzzang
        - rest 이름 변경 필요
        */
  }
  const rest = {
    handlePlayPause,
    handleVolumeChange,
    handleSeekBackward,
    handleSeekForward,
    isPlaying,
    volume,
  };

  return (
    <div style={{ maxWidth: '560px' }}>
      <div
        className="player-wrapper"
        style={{ maxWidth: '560px', height: '315px' }}
      >
        <ReactPlayer
          ref={reactPlayerRef}
          url={url}
          width="100%"
          height="100%"
          style={{ color: 'pink', backgroundColor: 'gray' }}
          wrapper={VideoWrapper} // react-player 자체에서 제공하는 wrapper 컴포넌트
          playing={isPlaying}
          volume={volume ? 1 : 0}
        />
      </div>
      <ControlBar reactPlayerRef={reactPlayerRef} rest={rest} />
    </div>
  );
}

export default VideoPlayer;

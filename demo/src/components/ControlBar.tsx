import React, { RefObject, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import S from './VideoPlayer.module.scss';
import formatTime from '../utils/formatTime';
import { Volume2, Play, Rewind, FastForward, Pause } from 'lucide-react';

interface BasicControlBarProps {
  handlePlayPause: () => void;
  handleSeekBackward: () => void;
  handleSeekForward: () => void;
  isPlaying: boolean;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ControlBarProps {
  playerRef: RefObject<ReactPlayer>;
  BasicControlBarProps: BasicControlBarProps;
}

export default function ControlBar({
  playerRef,
  BasicControlBarProps,
}: ControlBarProps) {
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);

  const {
    handlePlayPause,
    isPlaying,
    handleSeekBackward,
    handleSeekForward,
    handleVolumeChange,
    volume,
    handleProgressChange,
  } = BasicControlBarProps;

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime());
        setTotalTime(playerRef.current.getDuration());
      }
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, [playerRef]);

  return (
    <div className={S.controlBarWrapper}>
      {/* 진행률 바 추가 (제일 하단으로 이동) */}

      <div className={S.controlBar}>
        <div className={S.leftControlBar}>
          {/* 볼륨 슬라이더 */}
          <div className={S.volumeSlideBar}>
            <Volume2 />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
            />
          </div>

          <span className={S.timeViewBox}>
            {`${formatTime(currentTime)} / ${formatTime(totalTime)}`}
          </span>
        </div>

        <div className={S.centerControlBar}>
          <button onClick={handleSeekBackward}>
            <Rewind />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleSeekForward}>
            <FastForward />
          </button>
        </div>
      </div>
      <input
        className={S.progressBar}
        type="range"
        min={0}
        max={totalTime || 0}
        step="0.01"
        value={currentTime || 0}
        onChange={handleProgressChange}
        aria-label="Progress"
      />
    </div>
  );
}

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
  const [isDragging, setIsDragging] = useState(false);

  const {
    handlePlayPause,
    isPlaying,
    handleSeekBackward,
    handleSeekForward,
    handleVolumeChange,
    volume,
  } = BasicControlBarProps;

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && !isDragging) {
        setCurrentTime(playerRef.current.getCurrentTime());
        setTotalTime(playerRef.current.getDuration());
      }
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, [playerRef, isDragging]);

  // 마우스 이벤트 핸들러
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current && totalTime) {
      const progressBar = e.currentTarget; // progressBar 자체에서 좌표를 가져옴
      const progressBarRect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - progressBarRect.left; //전체 브라우저 기준 X좌표-프로그래스바의 X좌표
      const newTime = (clickPosition / progressBarRect.width) * totalTime;
      playerRef.current.seekTo(newTime);
      setCurrentTime(newTime);
    }
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && playerRef.current && totalTime) {
      const progressBar = e.currentTarget; // progressBar 자체에서 좌표를 가져옴
      const progressBarRect = progressBar.getBoundingClientRect();
      const dragPosition = e.clientX - progressBarRect.left; //전체 브라우저 기준 X좌표-프로그래스바의 X좌표
      const newTime = Math.min(
        Math.max((dragPosition / progressBarRect.width) * totalTime, 0),
        totalTime,
      );
      setCurrentTime(newTime);
    }
  };

  return (
    <div className={S.controlBarWrapper}>
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

      {/* 드래그 가능한 진행 바 */}
      <div
        className={S.progressBar}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)} // 드래그 상태 해제
        role="progressbar"
        aria-label="Progress"
      >
        <div
          className={S.progressFill}
          style={{
            width: `${currentTime && totalTime ? (currentTime / totalTime) * 100 : 0}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

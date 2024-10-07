import React, { RefObject, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import S from './ContorlBar.module.scss';
import formatTime from '../utils/formatTime';
import useBooleanState from '../hooks/useBooleanState';
import {
  Captions,
  CaptionsOff,
  Volume2,
  Play,
  Rewind,
  FastForward,
  Settings,
  Pause,
} from 'lucide-react';

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
  // todo @godhyzzang
  // - 자막 on/off 컴포넌트 개발 필요
  // - 환경설정 컴포넌트 개발 필요
  // - useBooleanState로 모든 버튼 boolean 상태 관리 필요
  const [onCaption, setOnCaptin] = useBooleanState(true);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);

  const {
    handlePlayPause,
    isPlaying,
    handleSeekBackward,
    handleSeekForward,
    handleVolumeChange,
    volume,
  } = BasicControlBarProps;

  // 볼륨 조절 핸들러

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
    <div className={S.controlBar}>
      <div className={S.leftControlBar}>
        <button onClick={handlePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </button>

        {/* 볼륨 슬라이더 */}
        <div className={S.volumeControl}>
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

        <span className={S.timeDiv}>
          {`${formatTime(currentTime)} / ${formatTime(totalTime)}`}
        </span>
      </div>

      <div className={S.rightControlBar}>
        <button onClick={handleSeekBackward}>
          <Rewind />
        </button>
        <button onClick={handleSeekForward}>
          <FastForward />
        </button>

        {/* <button>
          <Settings />
        </button> */}
      </div>
    </div>
  );
}

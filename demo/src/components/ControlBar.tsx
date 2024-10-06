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

interface BaseControlBarProps {
  handlePlayPause: () => void;
  handleVolumeChange: () => void;
  handleSeekBackward: () => void;
  handleSeekForward: () => void;
  isPlaying: boolean;
  volume: boolean;
}

interface ControlBarProps {
  reactPlayerRef: RefObject<ReactPlayer>;
  rest: BaseControlBarProps;
}

export default function ControlBar({ reactPlayerRef, rest }: ControlBarProps) {
  // todo @godhyzzang
  // - 자막 on/off 컴포넌트 개발 필요
  // - 환경설정 컴포넌트 개발 필요
  // - useBooleanState로 모든 버튼 boolean 상태 관리 필요
  // - 진행률 바 컴포넌트 개발 필요
  const [onCaption, setOnCaptin] = useBooleanState(true);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const {
    handlePlayPause,
    handleVolumeChange,
    isPlaying,
    handleSeekBackward,
    handleSeekForward,
  } = rest;

  useEffect(() => {
    const interval = setInterval(() => {
      if (reactPlayerRef.current) {
        setCurrentTime(reactPlayerRef.current.getCurrentTime());
        setTotalTime(reactPlayerRef.current.getDuration());
        console.log('controlBar', currentTime);
      }
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, [reactPlayerRef, currentTime, totalTime]);

  return (
    <div className={S.controlBar}>
      <div className={S.leftControlBar}>
        <button onClick={handlePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
        {/* 
        // todo @godhyzzang
        볼륨 0~1까지 막대로 조절 가능하게
        현재 0, 1로만 토글 가능
 */}
        <button onClick={handleVolumeChange}>
          <Volume2 />
        </button>

        <span
          className={S.timeDiv}
        >{`${formatTime(currentTime)} / ${formatTime(totalTime)}`}</span>
      </div>
      <div className={S.rightControlBar}>
        <button onClick={handleSeekBackward}>
          <Rewind />
        </button>
        <button onClick={handleSeekForward}>
          <FastForward />
        </button>
        <button onClick={setOnCaptin}>
          {onCaption ? <Captions /> : <CaptionsOff />}
        </button>
        <button>
          <Settings />
        </button>
      </div>
    </div>
  );
}

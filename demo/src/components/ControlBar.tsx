import React, { RefObject, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import S from './VideoPlayer.module.scss';
import formatTime from '../utils/formatTime';
import { Volume2, Play, Rewind, FastForward, Pause, Gauge } from 'lucide-react';
// todo :
// 1. 기능 : pause버튼 완전 연동 필요
// 2. 디자인 : progressBar 색깔 변경 필요

interface BasicControlBarProps {
  handlePlayPause: () => void;
  handleSeekBackward: () => void;
  handleSeekForward: () => void;
  isPlaying: boolean;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  setPlayBackRate: (rate: number) => void;
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
    setPlayBackRate,
  } = BasicControlBarProps;

  useEffect(() => {
    // todo : 리팩토링-> getCurrentTime setInterval로 1초마다 업데이트하는 방식 대신 ReactPlayer에서 onProgress 콜백 함수를 사용해서 currentTime을 받아오는 값을 ControlBar에 넘기는 방식 고려해보기
    const interval = setInterval(() => {
      if (playerRef.current && !isDragging) {
        setCurrentTime(playerRef.current.getCurrentTime());
        setTotalTime(playerRef.current.getDuration());
      }
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, [playerRef, isDragging]);

  // todo : 마우스 이벤트 핸들러 -> mouseDown, mouseUp, 공통함수로 만들기
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
  // todo : 이벤트 호출 최적화 필요 -> 디바운싱?
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
  const [showSubtitles, setShowSubtitles] = useState(false);

  const handleShowSubtitles = () => {
    setShowSubtitles(!showSubtitles); // 버튼을 누를 때마다 상태를 변경
  };

  return (
    <div className={S.controlBarWrapper}>
      <div className={S.controlBar}>
        <div className={S.leftControlBar}>
          {/* 볼륨 슬라이더 */}
          <div className={S.volumeSlideBar}>
            <Volume2 fill="white" />
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
            <Rewind fill="white" />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
          </button>
          <button onClick={handleSeekForward}>
            <FastForward fill="white" />
          </button>
        </div>
        <div className={S.rightControlBar}>
          <button onClick={handleShowSubtitles}>
            <Gauge />
          </button>
          {showSubtitles && (
            <div className={S.hiddenSubtitleButton}>
              <label className={S.playbackRateLabel}>
                <input
                  type="radio"
                  name="playbackRate"
                  value="0.5"
                  onClick={() => setPlayBackRate(0.5)}
                />
                0.5x
              </label>
              <label className={S.playbackRateLabel}>
                <input
                  type="radio"
                  name="playbackRate"
                  value="0.75"
                  defaultChecked
                  onClick={() => setPlayBackRate(0.75)}
                />
                0.75x
              </label>
              <label className={S.playbackRateLabel}>
                <input
                  type="radio"
                  name="playbackRate"
                  value="1"
                  onClick={() => setPlayBackRate(1)}
                />
                1x
              </label>
              <label className={S.playbackRateLabel}>
                <input
                  type="radio"
                  name="playbackRate"
                  value="1.2"
                  onClick={() => setPlayBackRate(1.2)}
                />
                1.2x
              </label>
              <label className={S.playbackRateLabel}>
                <input
                  type="radio"
                  name="playbackRate"
                  value="1.5"
                  onClick={() => setPlayBackRate(1.5)}
                />
                1.5x
              </label>
            </div>
          )}
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

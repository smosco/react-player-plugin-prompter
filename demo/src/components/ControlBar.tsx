import React, { RefObject, useState } from 'react';
import ReactPlayer from 'react-player';
import S from './VideoPlayer.module.scss';
import formatTime from '../utils/formatTime';
import { Volume2, Play, Rewind, FastForward, Pause, Gauge } from 'lucide-react';

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

  const handleMouseEvent = (
    e: React.MouseEvent<HTMLDivElement>,
    action: 'down' | 'up' | 'move',
  ) => {
    if (!playerRef.current || action === 'down') {
      setIsDragging(true);
    } else if (action === 'up') {
      setIsDragging(false);
      const progressBar = e.currentTarget;
      const progressBarRect = progressBar.getBoundingClientRect();
      const newTime =
        ((e.clientX - progressBarRect.left) / progressBarRect.width) *
        playerRef.current.getDuration();
      playerRef.current.seekTo(newTime);
    }
  };
  const [showPlaybackRate, setShowPlaybackRate] = useState(false);

  const handleShowPlaybackRate = () => {
    setShowPlaybackRate(!showPlaybackRate);
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
          {/* 진행시간 박스 */}
          <span className={S.timeViewBox}>
            {`${formatTime(playerRef.current?.getCurrentTime() ?? 0)} / ${formatTime(playerRef.current?.getDuration() ?? 0)}`}
          </span>
        </div>
        {/* 재생 조절 버튼 */}
        <div className={S.centerControlBar}>
          <Rewind fill="white" onClick={handleSeekBackward} />
          {isPlaying ? (
            <Pause fill="white" onClick={handlePlayPause} />
          ) : (
            <Play fill="white" onClick={handlePlayPause} />
          )}
          <FastForward fill="white" onClick={handleSeekForward} />
        </div>

        <div className={S.rightControlBar}>
          {/* 배속조절버튼 */}
          <Gauge onClick={handleShowPlaybackRate} />
          {showPlaybackRate && (
            <div className={S.playbackRateButton}>
              {[0.5, 0.75, 1, 1.2, 1.5].map((rate) => (
                <label key={rate} className={S.playbackRateLabel}>
                  <input
                    type="radio"
                    name="playbackRate"
                    value={rate}
                    onClick={() => setPlayBackRate(rate)}
                  />
                  {rate}x
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* progressBar */}
      <div
        className={S.progressBar}
        onMouseDown={(e) => handleMouseEvent(e, 'down')}
        onMouseMove={(e) => isDragging && handleMouseEvent(e, 'move')}
        onMouseUp={(e) => handleMouseEvent(e, 'up')}
        onMouseLeave={() => setIsDragging(false)} // 드래그 상태 해제
        role="progressbar"
        aria-label="Progress"
      >
        <div
          className={S.progressFill}
          style={{
            width: `${playerRef.current?.getCurrentTime() && playerRef.current?.getDuration() ? (playerRef.current?.getCurrentTime() / playerRef.current.getDuration()) * 100 : 0}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

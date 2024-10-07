import React from 'react';
import { ReactScriptPlayer } from 'core';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import SubtitleOption from './components/SubtitleOption';
import { LanguageCode } from './interfaces/Scripts';
import scriptsMockData from './mocks/subtitleMockData';
import { mockUrl } from './mocks/mockUrl';
import ControlBar from './components/ControlBar';
import Style from './components/VideoPlayer.module.scss';

type Mode = 'line' | 'block';

function App() {
  const playerRef = useRef<ReactPlayer | null>(null);

  const [mode, setMode] = useState<Mode>('line');

  const availableLanguages: LanguageCode[] = ['en', 'ko', 'fr'];

  const [selectedLanguages, setSelectedLanguages] =
    useState<LanguageCode[]>(availableLanguages);

  const [currentTime, setCurrentTime] = useState(0);

  const seekTo = (timeInSeconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(timeInSeconds, 'seconds');
    }
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);
  };

  // --- todo : ControlBar에서만 쓰이는 속성 ControlBar로 내부로 이동
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  const handleSeekForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(
        (playerRef.current.getCurrentTime() || 0) + 10,
        'seconds',
      );
      console.log(playerRef.current.getCurrentTime());
    }
  };

  const handleSeekBackward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(
        (playerRef.current.getCurrentTime() || 0) - 10,
        'seconds',
      );
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (playerRef.current) {
      playerRef.current.seekTo(newTime); // 플레이어의 시간 조정
      setCurrentTime(newTime);
      // 슬라이더의 배경색 업데이트
      const gradientValue = (100 / parseFloat(e.target.max)) * newTime;
      e.target.style.background = `linear-gradient(to right, #FFE283 0%, #FFE283 ${gradientValue}%, #ececec ${gradientValue}%, #ececec 100%)`;
    }
  };

  const BasicControlBarProps = {
    handlePlayPause,
    handleVolumeChange,
    handleSeekBackward,
    handleSeekForward,
    isPlaying,
    volume,
    handleProgressChange,
  };
  // ---

  return (
    <>
      {/* TODO(@smosco): progressInterval을 더 짧게 주자 */}
      <div className={Style.video}>
        <ReactPlayer
          ref={playerRef}
          url={mockUrl}
          playing={isPlaying}
          onProgress={handleProgress}
          volume={volume}
          controls={false}
        />
        <ControlBar
          playerRef={playerRef}
          BasicControlBarProps={BasicControlBarProps}
        />
      </div>

      <SubtitleOption
        mode={mode}
        selectedLanguages={selectedLanguages}
        setMode={setMode}
        setSelectedLanguages={setSelectedLanguages}
        availableLanguages={availableLanguages}
      />

      <ReactScriptPlayer
        mode={mode}
        subtitles={scriptsMockData}
        selectedLanguages={selectedLanguages}
        seekTo={seekTo}
        currentTime={currentTime}
        onClickSubtitle={(subtitle, index) => {
          console.log(subtitle, index);
        }}
        onSelectWord={(word, subtitle, index) => {
          console.log(word, subtitle, index);
        }}
      />
    </>
  );
}

export default App;

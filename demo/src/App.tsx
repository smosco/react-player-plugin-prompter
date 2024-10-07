import React from 'react';
import { ReactScriptPlayer } from 'core';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import SubtitleOption from './components/SubtitleOption';
import { LanguageCode } from './interfaces/Scripts';
import scriptsMockData from './mocks/subtitleMockData';
import { mockUrl } from './mocks/mockUrl';
import ControlBar from './components/ControlBar';

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
  const [volume, setVolume] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = () => {
    setVolume((prev) => !prev);
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

  const BasicControlBarProps = {
    handlePlayPause,
    handleVolumeChange,
    handleSeekBackward,
    handleSeekForward,
    isPlaying,
    volume,
  };
  // ---

  return (
    <div className="App">
      {/* TODO(@smosco): progressInterval을 더 짧게 주자 */}
      <ReactPlayer
        ref={playerRef}
        url={mockUrl}
        playing
        onProgress={handleProgress}
      />
      <ControlBar
        playerRef={playerRef}
        BasicControlBarProps={BasicControlBarProps}
      />

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
    </div>
  );
}

export default App;

import React from 'react';
import { ReactScriptPlayer } from 'core';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import SubtitleOption from './components/SubtitleOption';
import { LanguageCode } from './interfaces/Scripts';
import scriptsMockData from './mocks/subtitleMockData';
import { mockUrl } from './mocks/mockUrl';

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

  // console.log(currentTime);

  return (
    <div className="App">
      <ReactPlayer
        ref={playerRef}
        url={mockUrl}
        playing
        onProgress={handleProgress}
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

import React from 'react';
import { ReactScriptPlayer } from 'core';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import SubtitleOption from './components/SubtitleOption';
import { LanguageCode } from './interfaces/Scripts';
import scriptsMockData from './mocks/subtitleMockData';
import { mockUrl } from './mocks/mockUrl';

// 1. Mode 타입 정의 확인
type Mode = 'line' | 'block';

function App() {
  // 2. playerRef 타입 정의 (ReactPlayer | null)
  const playerRef = useRef<ReactPlayer | null>(null);

  // 3. Mode 상태 초기화 및 타입 정의
  const [mode, setMode] = useState<Mode>('line');

  // 4. availableLanguages 타입 정의 및 초기화
  const availableLanguages: LanguageCode[] = ['en', 'ko', 'fr'];

  // 5. selectedLanguages 상태 초기화 및 타입 정의
  const [selectedLanguages, setSelectedLanguages] =
    useState<LanguageCode[]>(availableLanguages);

  // 6. seekTo 함수 정의
  const seekTo = (timeInSeconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(timeInSeconds, 'seconds');
    }
  };

  return (
    <div className="App">
      {/* 7. ReactPlayer 컴포넌트에 ref 및 url 속성 추가 */}
      <ReactPlayer ref={playerRef} url={mockUrl} playing />

      {/* 8. SubtitleOption 컴포넌트에 필요한 props 전달 */}
      <SubtitleOption
        mode={mode}
        selectedLanguages={selectedLanguages}
        setMode={setMode}
        setSelectedLanguages={setSelectedLanguages}
        availableLanguages={availableLanguages}
      />

      {/* 9. ReactScriptPlayer 컴포넌트에 필요한 props 전달 */}
      <ReactScriptPlayer
        mode={mode}
        subtitles={scriptsMockData}
        selectedLanguages={selectedLanguages}
        seekTo={seekTo}
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

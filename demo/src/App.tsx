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
  // 쓸모없다고 생각한 reactPlayer의 onProgress 구문을 삭제하면 controlbar의 progressbar업데이트가 느려지는 문제 발생.따라서 onProgress에 쓰이는 currentTime을 삭제하지 않음
  const [currentTime, setCurrentTime] = useState(0);

  const seekTo = (timeInSeconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(timeInSeconds, 'seconds');
    }
  };

  // --- todo : ControlBar에서만 쓰이는 속성 ControlBar로 내부로 이동
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlayBackRate] = useState(1);
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleSeek = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(
        (playerRef.current.getCurrentTime() || 0) + seconds,
        'seconds',
      );
    }
  };

  const BasicControlBarProps = {
    handlePlayPause,
    handleVolumeChange,
    handleSeekForward: () => handleSeek(10),
    handleSeekBackward: () => handleSeek(-10),
    isPlaying,
    volume,
    setPlayBackRate,
  };
  // ---

  return (
    <>
      <div className={Style.video}>
        <ReactPlayer
          ref={playerRef}
          url={mockUrl}
          playing={isPlaying}
          width={'100%'}
          onPlay={() => setIsPlaying(true)}
          onStart={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)} // 쓸모없다고 생각한 이 onProgress 구문을 삭제하면 controlbar의 progressbar업데이트가 느려지는 문제 발생.따라서 안 지움.
          volume={volume}
          controls={false} // 유튜브 자체 컨트롤러 안 뜨게
          playbackRate={playbackRate}
          progressInterval={100} // 기존 progress 업데이트 1초에서 0.1초로 변경 -> controlBar 클릭반응 느린문제 개선
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

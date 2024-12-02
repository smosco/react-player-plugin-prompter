import React, { useState, useRef, useEffect } from 'react';
import { ReactScriptPlayer } from 'react-player-plugin-prompter';
import ReactPlayer from 'react-player';
import { CustomScriptLanguageCode } from './interfaces/Scripts';
import ScriptOption from './components/ScriptOption';
import scriptsMockData from './mocks/scriptsMockData';
import { mockUrl } from './mocks/mockUrl';
import ControlBar from './components/ControlBar';
import Style from './components/VideoPlayer.module.scss';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type Mode = 'line' | 'block';

function App() {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false); // 사용자 직접 이동 플래그

  const [mode, setMode] = useState<Mode>('line');
  const availableLanguages: CustomScriptLanguageCode[] = [
    'enScript',
    'koScript',
    'frScript',
  ];
  const [selectedLanguages, setSelectedLanguages] =
    useState<CustomScriptLanguageCode[]>(availableLanguages);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlayBackRate] = useState(1);

  const seekTo = (timeInSeconds: number) => {
    setIsSeeking(true);
    playerRef.current?.seekTo(timeInSeconds, 'seconds');

    setTimeout(() => setIsSeeking(false), 50);
  };

  const getCurrentTime = () => playerRef.current?.getCurrentTime() || 0;

  const BasicControlBarProps = {
    handlePlayPause: () => setIsPlaying(!isPlaying),
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setVolume(parseFloat(e.target.value)),
    handleSeekForward: () =>
      seekTo((playerRef.current?.getCurrentTime() || 0) + 10),
    handleSeekBackward: () =>
      seekTo((playerRef.current?.getCurrentTime() || 0) - 10),
    isPlaying,
    volume,
    setPlayBackRate,
  };

  useEffect(() => {
    let animationFrameId: number;

    const updateTime = () => {
      if (playerRef.current && !isSeeking) {
        setCurrentTime(playerRef.current.getCurrentTime() || 0);
      }
      animationFrameId = requestAnimationFrame(updateTime);
    };

    animationFrameId = requestAnimationFrame(updateTime);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isSeeking]);

  const PrevButton = (
    <button onClick={() => {}} className={Style.customButton}>
      <ChevronLeft color="#a78bfa" />
    </button>
  );

  const NextButton = (
    <button onClick={() => {}} className={Style.customButton}>
      <ChevronRight color="#a78bfa" />
    </button>
  );

  const FocusButton = ({
    isFocus,
    setIsFocus,
  }: {
    isFocus: boolean;
    setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  }) => (
    <div className={Style.focusButtonContainer}>
      <button
        className={Style.focusButton}
        type="button"
        disabled={isFocus}
        onClick={() => {
          setIsFocus(!isFocus); // isFocus 값을 반전시켜 업데이트
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isFocus === true ? '#cbc2d6' : '#8e48ea'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-crosshair"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="22" x2="18" y1="12" y2="12" />
          <line x1="6" x2="2" y1="12" y2="12" />
          <line x1="12" x2="12" y1="6" y2="2" />
          <line x1="12" x2="12" y1="22" y2="18" />
        </svg>
      </button>
    </div>
  );
  return (
    <div className={Style.container}>
      <div className={Style.video}>
        <ReactPlayer
          ref={playerRef}
          url={mockUrl}
          playing={isPlaying}
          width="100%"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          volume={volume}
          controls={false}
          playbackRate={playbackRate}
          onSeek={(seconds) => setCurrentTime(seconds)} // 사용자가 직접 탐색할 때 호출되어 현재 시간 업데이트
        />
        <ControlBar
          playerRef={playerRef}
          BasicControlBarProps={BasicControlBarProps}
        />
      </div>

      <ScriptOption
        mode={mode}
        selectedLanguages={selectedLanguages}
        setMode={setMode}
        setSelectedLanguages={setSelectedLanguages}
        availableLanguages={availableLanguages}
      />

      <ReactScriptPlayer<CustomScriptLanguageCode>
        mode={mode}
        scripts={scriptsMockData}
        selectedLanguages={selectedLanguages}
        seekTo={seekTo}
        getCurrentTime={getCurrentTime}
        onClickScript={(script, index) => console.log(script, index)}
        onSelectWord={(word, script, index) => console.log(word, script, index)}
        containerStyle={{
          width: '',
          height: '',
          padding: '',
          backgroundColor: '',
          borderColor: '#ede9fe',
        }}
        textStyle={{
          color: '',
          fontSize: '',
          fontWeight: '',
          lineHeight: '',
          activeColor: '#f5f3ff',
        }}
        timeStyle={{
          color: '#5a5a5a',
          fontSize: '',
          backgroundColor: '#ddd6fe',
          borderRadius: '',
          padding: '',
        }}
        PrevButton={PrevButton}
        NextButton={NextButton}
        FocusButton={FocusButton}
      />
    </div>
  );
}

export default App;

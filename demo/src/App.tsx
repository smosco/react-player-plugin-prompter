import React from 'react';
import { ReactScriptPlayer } from 'react-player-plugin-prompter';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import SubtitleOption from './components/SubtitleOption';
import { LanguageCode } from './interfaces/Scripts';
import scriptsMockData from './mocks/subtitleMockData';
import { mockUrl } from './mocks/mockUrl';
import ControlBar from './components/ControlBar';
import Style from './components/VideoPlayer.module.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const PrevButton = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className={Style.customButton}>
      <ChevronLeft color="#a78bfa" />
    </button>
  );

  const NextButton = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className={Style.customButton}>
      <ChevronRight color="#a78bfa" />
    </button>
  );

  return (
    <div className={Style.container}>
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
        // 기본 스타일
        containerWidth=""
        containerHeight=""
        containerPadding=""
        containerBackgroundColor=""
        containerBorderColor="#ede9fe"
        // 자막 텍스트 스타일링
        textColor=""
        textFontSize=""
        textFontWeight=""
        textLineHeight=""
        activeTextColor="#f5f3ff"
        // 시간 표시 스타일링
        timeColor="#5a5a5a"
        timeFontSize=""
        timeBackgroundColor="#ddd6fe"
        timeBorderRadius=""
        timePadding=""
        // 자막 넘기기 버튼
        PrevButton={PrevButton}
        NextButton={NextButton}
      />
    </div>
  );
}

export default App;

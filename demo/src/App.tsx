import React from 'react';
import { ReactScriptPlayer } from 'react-player-plugin-prompter';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import SubtitleOption from './components/SubtitleOption';
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
  const [currentTime, setCurrentTime] = useState(0);
  const seekTo = (timeInSeconds: number) =>
    playerRef.current?.seekTo(timeInSeconds, 'seconds');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlayBackRate] = useState(1);

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
          width="100%"
          onPlay={() => setIsPlaying(true)}
          onStart={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)} // 쓸모없다고 생각한 이 onProgress 구문을 삭제하면 controlbar의 progressbar업데이트가 느려지는 문제 발생.따라서 안 지움.
          volume={volume}
          controls={false} // 유튜브 자체 컨트롤러 안 뜨게
          playbackRate={playbackRate}
          progressInterval={100} // 기존 progress 업데이트 1초에서 0.1초로 변경 -> controlBar 클릭반응 느린문제 개
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
        onClickSubtitle={(subtitle, index) => console.log(subtitle, index)}
        onSelectWord={(word, subtitle, index) =>
          console.log(word, subtitle, index)
        }
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
      />
    </div>
  );
}

export default App;

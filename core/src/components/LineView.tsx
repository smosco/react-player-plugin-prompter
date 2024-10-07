import React from 'react';
import { LanguageCode, Subtitle } from '../interfaces/Scripts';
// import { useState } from 'react';
import arrow_back from '../assets/icons/arrow_back.svg';
import arrow_forward from '../assets/icons/arrow_forward.svg';
import { TextDisplay } from './TextDisplay';
import styles from './ReactScriptPlayer.module.scss';

interface LineViewProps {
  subtitles: Subtitle[];
  selectedLanguages: LanguageCode[];
  currentSubtitleIndex: number;
  seekTo: (timeInSeconds: number) => void;
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}

export function LineView({
  subtitles,
  selectedLanguages,
  currentSubtitleIndex,
  seekTo,
  onSelectWord,
}: LineViewProps) {
  // const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const totalSubtitles = subtitles.length;

  const handlePrevious = () => {
    if (currentSubtitleIndex > 0) {
      seekTo(subtitles[currentSubtitleIndex - 1].startTimeInSecond);
      // setCurrentSubtitleIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSubtitleIndex < totalSubtitles - 1) {
      seekTo(subtitles[currentSubtitleIndex + 1].startTimeInSecond);
      // setCurrentSubtitleIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.lineViewContainer}>
      <div className={styles.skipButtonContainer}>
        <button onClick={handlePrevious}>
          <img src={arrow_back} alt="Back Arrow" />
        </button>
        <button onClick={handleNext}>
          <img src={arrow_forward} alt="Forward Arrow" />
        </button>
      </div>
      {/* TextDisplay에서 현재 자막과 선택된 언어를 표시 */}
      {subtitles[currentSubtitleIndex] && (
        // TODO:자막 프로그레스바
        <TextDisplay
          subtitle={subtitles[currentSubtitleIndex]}
          selectedLanguages={selectedLanguages}
          onSelectWord={onSelectWord}
        />
      )}
    </div>
  );
}

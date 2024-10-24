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
  // 자막 텍스트 스타일링
  textColor?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textLineHeight?: string;
}

export function LineView({
  subtitles,
  selectedLanguages,
  currentSubtitleIndex,
  seekTo,
  onSelectWord,

  // 자막 텍스트 스타일링
  textColor,
  textFontSize,
  textFontWeight,
  textLineHeight,
}: LineViewProps) {
  const totalSubtitles = subtitles.length;

  const handlePrevious = () => {
    if (currentSubtitleIndex > 0) {
      seekTo(subtitles[currentSubtitleIndex - 1].startTimeInSecond);
    }
  };

  const handleNext = () => {
    if (currentSubtitleIndex < totalSubtitles - 1) {
      seekTo(subtitles[currentSubtitleIndex + 1].startTimeInSecond);
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
        // TODO(@smosco):사용자가 자막이 언제 넘어갈지 알 수 있도록 progressbar 추가
        <TextDisplay
          subtitle={subtitles[currentSubtitleIndex]}
          selectedLanguages={selectedLanguages}
          onSelectWord={onSelectWord}
          // 자막 텍스트 스타일링
          textColor={textColor}
          textFontSize={textFontSize}
          textFontWeight={textFontWeight}
          textLineHeight={textLineHeight}
        />
      )}
    </div>
  );
}

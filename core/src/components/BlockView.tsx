import React, { useRef, useEffect } from 'react';
import { LanguageCode, Subtitle } from 'interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';
import { convertTime } from 'utils/convertTime';
import { TextDisplay } from './TextDisplay';

interface BlockViewProps {
  subtitles: Subtitle[];
  currentSubtitleIndex: number;
  selectedLanguages: LanguageCode[];
  seekTo: (timeInSeconds: number) => void;
  onClickSubtitle: (subtitle: Subtitle, index: number) => void;
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;

  // 시간 관련 스타일
  timeColor?: string;
  timeFontSize?: string;
  timeBackgroundColor?: string;
  timeBorderRadius?: string;
  timePadding?: string;
}

export function BlockView({
  subtitles,
  currentSubtitleIndex,
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord,

  // 시간 관련 스타일
  timeColor,
  timeFontSize,
  timeBackgroundColor,
  timeBorderRadius,
  timePadding,
}: BlockViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // console.log(containerRef.current);
      if (currentSubtitleIndex < containerRef.current.children.length - 1) {
        containerRef.current.children[currentSubtitleIndex].scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }
    }
  }, [currentSubtitleIndex]);

  return (
    <div ref={containerRef} className={styles.blockViewContainer}>
      {subtitles.map((subtitle, index) => (
        <div
          className={`${styles.subtitleItem} ${index === currentSubtitleIndex ? styles.active : ''}`}
          key={index}
          onClick={() => {
            // TODO(@smosco): 자막 클릭 함수 구현
            seekTo(subtitle.startTimeInSecond);
            onClickSubtitle(subtitle, index);
          }}
        >
          <button
            className={styles.timeButton}
            style={{
              color: timeColor,
              fontSize: timeFontSize,
              backgroundColor: timeBackgroundColor,
              borderRadius: timeBorderRadius,
              padding: timePadding,
            }}
          >
            {convertTime(subtitle.startTimeInSecond)}
          </button>

          <TextDisplay
            subtitle={subtitles[index]}
            selectedLanguages={selectedLanguages}
            onSelectWord={onSelectWord}
          />
        </div>
      ))}
    </div>
  );
}

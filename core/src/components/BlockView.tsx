import React, { useRef, useEffect } from 'react';
import {
  LanguageCode,
  Subtitle,
  TimeStyle,
  TextStyle,
} from 'interfaces/Scripts';
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

  // 시간 및 텍스트 관련 스타일
  timeStyle?: TimeStyle;
  textStyle?: TextStyle;
}

export function BlockView({
  subtitles,
  currentSubtitleIndex,
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord,
  timeStyle,
  textStyle,
}: BlockViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      containerRef.current &&
      currentSubtitleIndex < containerRef.current.children.length - 1
    ) {
      containerRef.current.children[currentSubtitleIndex].scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [currentSubtitleIndex]);

  return (
    <div ref={containerRef} className={styles.blockViewContainer}>
      {subtitles.map((subtitle, index) => (
        <div
          className={styles.subtitleItem}
          key={index}
          onClick={() => {
            seekTo(subtitle.startTimeInSecond);
            onClickSubtitle(subtitle, index);
          }}
          style={{
            backgroundColor:
              index === currentSubtitleIndex
                ? textStyle?.activeColor || 'lightgray'
                : 'transparent',
          }}
        >
          <button
            className={styles.timeButton}
            style={{
              color: timeStyle?.color,
              fontSize: timeStyle?.fontSize,
              backgroundColor: timeStyle?.backgroundColor,
              borderRadius: timeStyle?.borderRadius,
              padding: timeStyle?.padding,
            }}
          >
            {convertTime(subtitle.startTimeInSecond)}
          </button>

          <TextDisplay
            subtitle={subtitles[index]}
            selectedLanguages={selectedLanguages}
            onSelectWord={onSelectWord}
            textStyle={textStyle}
          />
        </div>
      ))}
    </div>
  );
}

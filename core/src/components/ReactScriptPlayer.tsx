import React from 'react';
import styles from './ReactScriptPlayer.module.scss';
import {
  LanguageCode,
  Subtitle,
  ContainerStyle,
  TextStyle,
  TimeStyle,
} from '../interfaces/Scripts';
import { LineView } from './LineView';
import { BlockView } from './BlockView';
import { findCurrentSubtitleIndex } from 'utils/findCurrentSubtitleIndex';

export interface ReactScriptPlayerProps {
  mode: 'line' | 'block';
  subtitles: Subtitle[];
  selectedLanguages: LanguageCode[];
  seekTo: (timeInSeconds: number) => void;
  currentTime: number;
  onClickSubtitle: (subtitle: Subtitle, index: number) => void;
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
  containerStyle?: ContainerStyle;
  textStyle?: TextStyle;
  timeStyle?: TimeStyle;
  PrevButton?: ({ onClick }: { onClick: () => void }) => JSX.Element;
  NextButton?: ({ onClick }: { onClick: () => void }) => JSX.Element;
}

export function ReactScriptPlayer({
  mode,
  subtitles,
  selectedLanguages,
  seekTo,
  currentTime,
  onClickSubtitle,
  onSelectWord,
  containerStyle,
  textStyle,
  timeStyle,
  PrevButton,
  NextButton,
}: ReactScriptPlayerProps) {
  const currentSubtitleIndex =
    findCurrentSubtitleIndex(subtitles, currentTime) ?? 0;

  const scriptPlayerProps = {
    subtitles,
    currentSubtitleIndex,
    selectedLanguages,
    seekTo,
    onSelectWord,
    textStyle,
    PrevButton,
    NextButton,
  };

  return (
    <div className={styles.subtitleContainer} style={{ ...containerStyle }}>
      <div className={styles.displayContainer}>
        <p className={styles.title}>Transcript</p>
        {mode === 'line' ? (
          <LineView {...scriptPlayerProps} textStyle={textStyle} />
        ) : (
          <BlockView
            {...scriptPlayerProps}
            onClickSubtitle={onClickSubtitle}
            timeStyle={timeStyle}
            textStyle={textStyle}
          />
        )}
      </div>
    </div>
  );
}

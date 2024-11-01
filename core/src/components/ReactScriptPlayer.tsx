import React from 'react';
import styles from './ReactScriptPlayer.module.scss';
import {
  LanguageCode,
  Script,
  ContainerStyle,
  TextStyle,
  TimeStyle,
} from '../interfaces/Scripts';
import { LineView } from './LineView';
import { BlockView } from './BlockView';
import { findCurrentScriptIndex } from 'utils/findCurrentScriptIndex';

export interface ReactScriptPlayerProps<T extends string = LanguageCode> {
  mode: 'line' | 'block';
  scripts: Script<T>[];
  selectedLanguages: T[];
  seekTo: (timeInSeconds: number) => void;
  currentTime: number;
  onClickScript: (script: Script<T>, index: number) => void;
  onSelectWord: (word: string, script: Script<T>, index: number) => void;
  containerStyle?: ContainerStyle;
  textStyle?: TextStyle;
  timeStyle?: TimeStyle;
  PrevButton?: ({ onClick }: { onClick: () => void }) => JSX.Element;
  NextButton?: ({ onClick }: { onClick: () => void }) => JSX.Element;
}

export function ReactScriptPlayer<T extends string = LanguageCode>({
  mode,
  scripts,
  selectedLanguages,
  seekTo,
  currentTime,
  onClickScript,
  onSelectWord,
  containerStyle,
  textStyle,
  timeStyle,
  PrevButton,
  NextButton,
}: ReactScriptPlayerProps<T>) {
  const currentScriptIndex = findCurrentScriptIndex(scripts, currentTime) ?? 0;

  const scriptPlayerProps = {
    scripts,
    currentScriptIndex,
    selectedLanguages,
    seekTo,
    onSelectWord,
    textStyle,
    PrevButton,
    NextButton,
  };

  return (
    <div className={styles.scriptsContainer} style={{ ...containerStyle }}>
      <div className={styles.displayContainer}>
        <p className={styles.title}>Transcript</p>
        {mode === 'line' ? (
          <LineView {...scriptPlayerProps} textStyle={textStyle} />
        ) : (
          <BlockView
            {...scriptPlayerProps}
            onClickScript={onClickScript}
            timeStyle={timeStyle}
            textStyle={textStyle}
          />
        )}
      </div>
    </div>
  );
}

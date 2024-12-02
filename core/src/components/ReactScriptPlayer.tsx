import React from 'react';
import styles from './ReactScriptPlayer.module.scss';
import {
  LanguageCode,
  Script,
  ContainerStyle,
  TextStyle,
  TimeStyle,
} from '../interfaces/Scripts';
import { Dispatch, SetStateAction } from 'react';
import { LineView } from './LineView';
import { BlockView } from './BlockView';
import { findCurrentScriptIndex } from 'utils/findCurrentScriptIndex';
export interface ReactScriptPlayerProps<T extends string = LanguageCode> {
  mode: 'line' | 'block';
  scripts: Script<T>[];
  selectedLanguages: T[];
  seekTo: (timeInSeconds: number) => void;
  getCurrentTime: () => number;
  onClickScript: (script: Script<T>, index: number) => void;
  onSelectWord: (word: string, script: Script<T>, index: number) => void;
  containerStyle?: ContainerStyle;
  textStyle?: TextStyle;
  timeStyle?: TimeStyle;
  PrevButton?: JSX.Element;
  NextButton?: JSX.Element;
  FocusButton?: ({
    isFocused,
    setIsFocused,
  }: {
    isFocused: boolean;
    setIsFocused: Dispatch<SetStateAction<boolean>>;
  }) => JSX.Element;
}

export function ReactScriptPlayer<T extends string = LanguageCode>({
  mode,
  scripts,
  selectedLanguages,
  seekTo,
  getCurrentTime,
  onClickScript,
  onSelectWord,
  containerStyle,
  textStyle,
  timeStyle,
  PrevButton,
  NextButton,
  FocusButton,
}: ReactScriptPlayerProps<T>) {
  const currentTime = getCurrentTime();
  const currentScriptIndex = findCurrentScriptIndex(scripts, currentTime) ?? 0;

  const handleClickScript = (script: Script<T>, index: number) => {
    onClickScript(script, index);
  };

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
            FocusButton={FocusButton}
            onClickScript={handleClickScript}
            timeStyle={timeStyle}
            textStyle={textStyle}
          />
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import styles from './ReactScriptPlayer.module.scss';
import { SwitchButton } from './SwitchButton';
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
  const currentScriptIndex = findCurrentScriptIndex(scripts, currentTime) ?? 0; // 동영상 재생에 동기화되는 script Index찾는 함수
  const [isSubtitleCentered, setIsSubtitleCentered] = useState(true);

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
        <div className={styles.horizontalContainer}>
          <p className={styles.title}>Transcript</p>
          {mode === 'block' && SwitchButton && (
            <SwitchButton
              isToggle={isSubtitleCentered}
              toggle={setIsSubtitleCentered}
            />
          )}
        </div>
        {mode === 'line' ? (
          <LineView {...scriptPlayerProps} textStyle={textStyle} />
        ) : (
          <BlockView
            {...scriptPlayerProps}
            isSubtitleCentered={isSubtitleCentered}
            onClickScript={handleClickScript}
            timeStyle={timeStyle}
            textStyle={textStyle}
          />
        )}
      </div>
    </div>
  );
}

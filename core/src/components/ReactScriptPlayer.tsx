import React, { useState } from 'react';
import styles from './ReactScriptPlayer.module.scss';
import {
  LanguageCode,
  Script,
  ContainerStyle,
  TextStyle,
  TimeStyle,
} from '../interfaces/Scripts';
import { findClickedIndex } from 'utils/findClickedIndex';
import { LineView } from './LineView';
import { BlockView } from './BlockView';
import { findCurrentScriptIndex } from 'utils/findCurrentScriptIndex';

export interface ReactScriptPlayerProps<T extends string = LanguageCode> {
  mode: 'line' | 'block';
  scripts: Script<T>[];
  selectedLanguages: T[];
  seekTo: (timeInSeconds: number) => void;
  // isAsync: boolean;   // TODO(@godhyzzang) : isAsync를 props로 넘겨줘야합니다
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
  // isAsync,  // TODO(@godhyzzang) : isAsync를 props로 넘겨줘야합니다
  currentTime,
  onClickScript,
  onSelectWord,
  containerStyle,
  textStyle,
  timeStyle,
  PrevButton,
  NextButton,
}: ReactScriptPlayerProps<T>) {
  // TODO(@godhyzzang) : isAsync를 props로 넘겨줘야합니다
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAsync, setIsAsync] = useState<boolean>();
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  const currentScriptIndex = isAsync
    ? (findClickedIndex(scripts, clickedIndex) ?? 0) // 클릭한 script index 찾는 함수
    : (findCurrentScriptIndex(scripts, currentTime) ?? 0); // 동영상 재생에 동기화되는 script Index찾는 함수

  // TODO(@godhyzzang) : lineview에서도 setClickedIndex 사용해야함. 현재 이 함수가 blockview에서만 사용되고 있어서 lineview에서는 currentScriptIndex를 set하지 못 하고 있습니다.
  const handleClickScript = (script: Script<T>, index: number) => {
    setClickedIndex(index);
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
            onClickScript={handleClickScript}
            timeStyle={timeStyle}
            textStyle={textStyle}
          />
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { LanguageCode, Subtitle } from 'interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';
import { convertTime } from 'utils/convertTime';
import { TextDisplay } from './TextDisplay';

interface BlockViewProps {
  subtitles: Subtitle[];
  selectedLanguages: LanguageCode[]; // 선택된 언어 배열
  seekTo: (timeInSeconds: number) => void;
  onClickSubtitle: (subtitle: Subtitle, index: number) => void;
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}

export function BlockView({
  subtitles,
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord,
}: BlockViewProps) {
  return (
    <div className={styles.blockViewContainer}>
      {subtitles.map((subtitle, index) => (
        <div
          key={index}
          onClick={() => {
            // TODO(@smosco): 자막 클릭 함수 구현
            seekTo(subtitle.startTimeInSecond);
            onClickSubtitle(subtitle, index);
          }}
        >
          <button>{convertTime(subtitle.startTimeInSecond)}</button>

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

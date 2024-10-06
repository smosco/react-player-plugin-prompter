import React from 'react';
import styles from './ReactScriptPlayer.module.scss';
import { useEffect } from 'react';
import { LanguageCode, Subtitle } from '../interfaces/Scripts';
import { LineView } from './LineView';
import { BlockView } from './BlockView';

export interface ReactScriptPlayerProps {
  mode: 'line' | 'block';
  subtitles: Subtitle[];
  selectedLanguages: LanguageCode[];
  seekTo: (timeInSeconds: number) => void;
  onClickSubtitle: (subtitle: Subtitle, index: number) => void;
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}

export function ReactScriptPlayer({
  mode,
  subtitles,
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord,
}: ReactScriptPlayerProps) {
  useEffect(() => {
    // TODO(@smosco): 1초마다 재생 시간 받아오기 (onProgress or getCurrentTime)
  }, []);

  return (
    <div className={styles.subtitleContainer}>
      <div className={styles.displayContainer}>
        {mode === 'line' && (
          <LineView
            subtitles={subtitles}
            selectedLanguages={selectedLanguages}
            seekTo={seekTo}
            onSelectWord={onSelectWord}
          />
        )}
        {mode === 'block' && (
          <BlockView
            subtitles={subtitles}
            selectedLanguages={selectedLanguages}
            seekTo={seekTo}
            onClickSubtitle={onClickSubtitle}
            onSelectWord={onSelectWord}
          />
        )}
      </div>
    </div>
  );
}

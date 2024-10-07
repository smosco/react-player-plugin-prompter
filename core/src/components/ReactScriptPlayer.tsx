import React, { useMemo } from 'react';
import styles from './ReactScriptPlayer.module.scss';
import { LanguageCode, Subtitle } from '../interfaces/Scripts';
import { LineView } from './LineView';
import { BlockView } from './BlockView';

export interface ReactScriptPlayerProps {
  mode: 'line' | 'block';
  subtitles: Subtitle[];
  selectedLanguages: LanguageCode[];
  seekTo: (timeInSeconds: number) => void;
  currentTime: number;
  onClickSubtitle: (subtitle: Subtitle, index: number) => void;
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}

export function ReactScriptPlayer({
  mode,
  subtitles,
  selectedLanguages,
  seekTo,
  currentTime,
  onClickSubtitle,
  onSelectWord,
}: ReactScriptPlayerProps) {
  const reversedSubtitles = useMemo(
    () => [...subtitles].reverse(),
    [subtitles],
  );
  // TODO(@smosco): 현재 자막 인덱스 찾는 로직 리팩토링
  const currentSubtitleIndex = useMemo(() => {
    const index = reversedSubtitles.findIndex(
      (subtitle) => subtitle.startTimeInSecond < currentTime,
    );
    return reversedSubtitles.length - 1 - index;
  }, [reversedSubtitles, currentTime]);

  return (
    <div className={styles.subtitleContainer}>
      <div className={styles.displayContainer}>
        {/* TODO(@smosco): line, block 뷰 props가 거의 동일하기 때문에 공통 props로 추출해서 관리 */}
        {mode === 'line' && (
          <LineView
            subtitles={subtitles}
            currentSubtitleIndex={currentSubtitleIndex}
            selectedLanguages={selectedLanguages}
            seekTo={seekTo}
            onSelectWord={onSelectWord}
          />
        )}
        {mode === 'block' && (
          <BlockView
            subtitles={subtitles}
            currentSubtitleIndex={currentSubtitleIndex}
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

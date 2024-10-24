import React from 'react';
import styles from './ReactScriptPlayer.module.scss';
import { LanguageCode, Subtitle } from '../interfaces/Scripts';
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

  // 자막 컨테이너 스타일링
  containerWidth?: string;
  containerHeight?: string;
  containerPadding?: string;
  containerBackgroundColor?: string;
  containerBorderColor?: string;

  // 자막 텍스트 스타일링
  textColor?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textLineHeight?: string;
  activeTextColor?: string;

  // 시간 표시 스타일링
  timeColor?: string;
  timeFontSize?: string;
  timeBackgroundColor?: string;
  timeBorderRadius?: string;
  timePadding?: string;
}

export function ReactScriptPlayer({
  mode,
  subtitles,
  selectedLanguages,
  seekTo,
  currentTime,
  onClickSubtitle,
  onSelectWord,

  // 기본 스타일
  containerWidth,
  containerHeight,
  containerPadding,
  containerBackgroundColor,
  containerBorderColor,

  // 자막 텍스트 스타일링
  textColor,
  textFontSize,
  textFontWeight,
  textLineHeight,
  activeTextColor,

  // 시간 표시 스타일링
  timeColor,
  timeFontSize,
  timeBackgroundColor,
  timeBorderRadius,
  timePadding,
}: ReactScriptPlayerProps) {
  const currentSubtitleIndex =
    findCurrentSubtitleIndex(subtitles, currentTime) ?? 0;

  return (
    <div
      className={styles.subtitleContainer}
      style={{
        width: containerWidth,
        height: containerHeight,
        padding: containerPadding,
        backgroundColor: containerBackgroundColor,
        borderColor: containerBorderColor,
      }}
    >
      <div className={styles.displayContainer}>
        <p className={styles.title}>Transcript</p>

        {/* TODO(@smosco): line, block 뷰 props가 거의 동일하기 때문에 공통 props로 추출해서 관리 */}
        {mode === 'line' && (
          <LineView
            subtitles={subtitles}
            currentSubtitleIndex={currentSubtitleIndex}
            selectedLanguages={selectedLanguages}
            seekTo={seekTo}
            onSelectWord={onSelectWord}
            // 자막 텍스트 스타일을 LineView에 전달
            textColor={textColor}
            textFontSize={textFontSize}
            textFontWeight={textFontWeight}
            textLineHeight={textLineHeight}
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
            // 시간 관련 스타일을 BlockView에 전달
            timeColor={timeColor}
            timeFontSize={timeFontSize}
            timeBackgroundColor={timeBackgroundColor}
            timeBorderRadius={timeBorderRadius}
            timePadding={timePadding}
            // 자막 텍스트 스타일링
            textColor={textColor}
            textFontSize={textFontSize}
            textFontWeight={textFontWeight}
            textLineHeight={textLineHeight}
            activeTextColor={activeTextColor}
          />
        )}
      </div>
    </div>
  );
}

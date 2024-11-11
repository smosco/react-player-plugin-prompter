import React, { useRef, useEffect, useState } from 'react';
import { LanguageCode, Script, TimeStyle, TextStyle } from 'interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';
import { convertTime } from 'utils/convertTime';
import { TextDisplay } from './TextDisplay';
import { moveToScriptAtIndex } from '../utils/moveToScriptAtIndex';

interface BlockViewProps<T extends string = LanguageCode> {
  scripts: Script<T>[];
  currentScriptIndex: number;
  selectedLanguages: T[];
  seekTo: (timeInSeconds: number) => void;
  onClickScript: (script: Script<T>, index: number) => void;
  onSelectWord: (word: string, script: Script<T>, index: number) => void;
  timeStyle?: TimeStyle;
  textStyle?: TextStyle;
  FocusButton?: ({
    isFocus,
    setIsFocus,
  }: {
    isFocus: boolean;
    setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  }) => JSX.Element;
}

export function BlockView<T extends string = LanguageCode>({
  scripts,
  currentScriptIndex,
  selectedLanguages,
  seekTo,
  onClickScript,
  onSelectWord,
  timeStyle,
  textStyle,
  FocusButton,
}: BlockViewProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubtitleCentered, setIsSubtitleCentered] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      setIsSubtitleCentered(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleInteraction);
      container.addEventListener('touchmove', handleInteraction);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleInteraction);
        container.removeEventListener('touchmove', handleInteraction);
      }
    };
  }, [setIsSubtitleCentered]);

  useEffect(() => {
    if (
      containerRef.current &&
      isSubtitleCentered !== undefined &&
      isSubtitleCentered
    ) {
      if (currentScriptIndex < containerRef.current.children.length - 1) {
        const container = containerRef.current;
        const target = container.children[currentScriptIndex];
        // 컨테이너의 상단에서부터 타겟까지의 거리 계산
        const targetTop = target.getBoundingClientRect().top;
        const containerTop = container.getBoundingClientRect().top;
        const relativeTop = targetTop - containerTop;

        container.scrollBy({
          top: relativeTop - 20,
          behavior: 'smooth',
        });
      }
    }
  }, [currentScriptIndex, isSubtitleCentered]);

  return (
    <div className={styles.blockViewContainer}>
      {FocusButton && (
        <FocusButton
          setIsFocus={setIsSubtitleCentered}
          isFocus={isSubtitleCentered}
        />
      )}
      <div ref={containerRef} className={styles.blockViewContainer}>
        {scripts.map((script, index) => (
          <div
            className={styles.scriptItem}
            key={index}
            onClick={() => {
              moveToScriptAtIndex(index, scripts, seekTo);
              onClickScript(script, index);
            }}
            style={{
              backgroundColor:
                index === currentScriptIndex
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
              {convertTime(script.startTimeInSecond)}
            </button>

            <TextDisplay
              script={scripts[index]}
              selectedLanguages={selectedLanguages}
              onSelectWord={onSelectWord}
              textStyle={textStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

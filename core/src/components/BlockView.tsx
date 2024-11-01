import React, { useRef, useEffect } from 'react';
import { LanguageCode, Script, TimeStyle, TextStyle } from 'interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';
import { convertTime } from 'utils/convertTime';
import { TextDisplay } from './TextDisplay';

// BlockView에 제네릭 T 추가
interface BlockViewProps<T extends string = LanguageCode> {
  scripts: Script<T>[];
  currentScriptIndex: number;
  selectedLanguages: T[];
  seekTo: (timeInSeconds: number) => void;
  onClickScript: (script: Script<T>, index: number) => void;
  onSelectWord: (word: string, script: Script<T>, index: number) => void;
  timeStyle?: TimeStyle;
  textStyle?: TextStyle;
}

// BlockView에 제네릭 T를 적용
export function BlockView<T extends string = LanguageCode>({
  scripts,
  currentScriptIndex,
  selectedLanguages,
  seekTo,
  onClickScript,
  onSelectWord,
  timeStyle,
  textStyle,
}: BlockViewProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
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
  }, [currentScriptIndex]);

  return (
    <div ref={containerRef} className={styles.blockViewContainer}>
      {scripts.map((script, index) => (
        <div
          className={styles.scriptItem}
          key={index}
          onClick={() => {
            seekTo(script.startTimeInSecond);
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
  );
}

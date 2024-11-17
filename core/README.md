# 📚 react-player-plugin-prompter

**react-player-plugin-prompter** is a powerful, open-source library that enhances the capabilities of `react-player` by adding subtitle synchronization, sentence navigation, and word selection features. It is particularly useful for educational content and language learning platforms.

---

## 🚀 Key Features

- **Subtitle Synchronization**: Automatically scrolls subtitles based on the current playback time.
- **Line and Block Modes**: Provides options to display subtitles either line-by-line or in block mode.
- **Subtitle Navigation Buttons**: Easily navigate to the previous or next subtitle.
- **Word Selection Feature**: Select specific words within subtitles for additional interactions.
- **Focus Mode**: Enables a mode where only the current subtitle is highlighted, helping users focus on a single line at a time.

---

## 🛠️ Installation

```bash
npm install react-player-plugin-prompter
# or
yarn add react-player-plugin-prompter
```

---

## 📖 Usage Example

### Basic Example

```tsx
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { ReactScriptPlayer } from 'react-player-plugin-prompter';
import scriptsMockData from './mocks/scriptsMockData';

function App() {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const seekTo = (timeInSeconds: number) =>
    playerRef.current?.seekTo(timeInSeconds, 'seconds');

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="https://example.com/video.mp4"
        playing={isPlaying}
        onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)}
        controls
      />
      <ReactScriptPlayer
        mode="line"
        scripts={scriptsMockData}
        selectedLanguages={['en', 'ko']}
        seekTo={seekTo}
        currentTime={currentTime}
        onClickScript={(script, index) => console.log(script, index)}
        onSelectWord={(word, script, index) => console.log(word, script, index)}
      />
    </div>
  );
}

export default App;
```

---

## 🔧 Props Explanation

| Prop                | Type                                                                                                  | Description |
|---------------------|-------------------------------------------------------------------------------------------------------|-------------|
| `mode`              | `'line' | 'block'`                                                                                    | Determines how subtitles are displayed: line-by-line or in block mode. |
| `scripts`           | `Script<LanguageCode>[]`                                                                              | Array of subtitle scripts with timings, translations, and metadata. |
| `selectedLanguages` | `LanguageCode[]`                                                                                      | Array of languages to display for subtitles (e.g., `['en', 'ko']`). |
| `seekTo`            | `(timeInSeconds: number) => void`                                                                     | Function to seek the video to a specific time (in seconds). |
| `currentTime`       | `number`                                                                                              | Current playback time in seconds. |
| `onClickScript`     | `(script, index) => void`                                                                             | Callback function triggered when a subtitle is clicked. |
| `onSelectWord`      | `(word, script, index) => void`                                                                       | Callback function triggered when a word within a subtitle is selected. |
| `containerStyle`    | `ContainerStyle`                                                                                      | Custom styles for the subtitle container (width, height, padding, background color, etc.). |
| `textStyle`         | `TextStyle`                                                                                           | Styles for the subtitle text (color, font size, active color, etc.). |
| `timeStyle`         | `TimeStyle`                                                                                           | Styles for the timestamp button (color, font, background color, etc.). |
| `PrevButton`        | `({ onClick }: { onClick: () => void }) => JSX.Element`                                               | Custom button to move to the previous subtitle. |
| `NextButton`        | `({ onClick }: { onClick: () => void }) => JSX.Element`                                               | Custom button to move to the next subtitle. |
| `FocusButton`       | `({ isFocus, setIsFocus }: { isFocus: boolean, setIsFocus: Dispatch<SetStateAction<boolean>> }) => JSX.Element` | Button to toggle focus mode on/off. |

---

## 📂 Type Definitions

### LanguageCode

```typescript
type LanguageCode = 'en' | 'ko' | 'ja' | 'de' | 'fr' | 'es';
```

### Script

```typescript
type Script<T extends string = LanguageCode> = Partial<Record<T, string>> & {
  startTimeInSecond: number;
  durationInSecond: number;
  isHighlighted: boolean;
};
```

---

## 📂 Data Structure Example (`scriptsMockData`)

```typescript
export const scriptsMockData = [
  {
    en: 'Hello, welcome to the video!',
    ko: '안녕하세요, 비디오에 오신 것을 환영합니다!',
    startTimeInSecond: 0,
    durationInSecond: 5,
    isHighlighted: true,
  },
  {
    en: 'This is a subtitle example.',
    ko: '이것은 자막 예제입니다.',
    startTimeInSecond: 6,
    durationInSecond: 4,
    isHighlighted: false,
  },
];
```

---

## 🎨 Styling Customization Example

```tsx
<ReactScriptPlayer
  mode="block"
  scripts={scriptsMockData}
  selectedLanguages={['en']}
  seekTo={seekTo}
  currentTime={currentTime}
  textStyle={{
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
    activeColor: '#f5f3ff',
  }}
  timeStyle={{
    color: '#5a5a5a',
    fontSize: '14px',
    backgroundColor: '#ddd6fe',
    borderRadius: '5px',
    padding: '4px',
  }}
  containerStyle={{
    width: '100%',
    height: 'auto',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  }}
/>
```

---

## 📄 License

This library is licensed under the [MIT License](../LICENSE).


// esbuild-scss-modules-plugin:./ReactScriptPlayer.module.scss
var digest = "e43dd2dcd17a6df0f76a4acecb4fc455d13a542ff476cd474e6b61011f1bfcd7";
var classes = { "subtitleContainer": "_subtitleContainer_1shar_7", "title": "_title_1shar_19", "lineViewContainer": "_lineViewContainer_1shar_24", "skipButtonContainer": "_skipButtonContainer_1shar_29", "blockViewContainer": "_blockViewContainer_1shar_36", "subtitleItem": "_subtitleItem_1shar_42", "timeButton": "_timeButton_1shar_47", "textView": "_textView_1shar_60", "textEn": "_textEN_1shar_65" };
var css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

._subtitleContainer_1shar_7 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border: 2px solid #ececec;
  border-radius: 0.75rem;
  overflow-y: auto;
}

._title_1shar_19 {
  font-size: 1.25rem;
  font-weight: 700;
}

._lineViewContainer_1shar_24 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
._lineViewContainer_1shar_24 ._skipButtonContainer_1shar_29 {
  align-self: end;
}
._lineViewContainer_1shar_24 ._skipButtonContainer_1shar_29 button {
  cursor: pointer;
}

._blockViewContainer_1shar_36 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 16rem;
}
._blockViewContainer_1shar_36 ._subtitleItem_1shar_42 {
  padding: 16px;
  border-radius: 12px;
  transition: background-color 0.5s ease-in-out;
}
._blockViewContainer_1shar_36 ._subtitleItem_1shar_42 ._timeButton_1shar_47 {
  width: 5rem;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 9999px;
  background-color: gray;
  cursor: pointer;
  font-size: 0.75rem;
  color: white;
}

._textView_1shar_60 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
._textView_1shar_60 ._textEN_1shar_65 {
  font-weight: bold;
}`;
(function() {
  if (typeof document !== "undefined" && !document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var ReactScriptPlayer_module_default = classes;

// src/hooks/useThrottling.ts
import { useState, useCallback } from "react";
function useThrottling({
  buttonClicked,
  delay = 300
}) {
  const [isThrottled, setIsThrottled] = useState(false);
  const throttledCallback = useCallback(() => {
    if (!isThrottled) {
      buttonClicked();
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
      }, delay);
    }
  }, [isThrottled, buttonClicked, delay]);
  return throttledCallback;
}

// src/assets/icons/arrow_back.svg
var arrow_back_default = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_17_4620)">%0A<path d="M17.5098 3.86998L15.7298 2.09998L5.83984 12L15.7398 21.9L17.5098 20.13L9.37984 12L17.5098 3.86998Z" fill="%23707070"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_17_4620">%0A<rect width="24" height="24" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/icons/arrow_forward.svg
var arrow_forward_default = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_17_4639)">%0A<path d="M6.49023 20.13L8.26023 21.9L18.1602 12L8.26023 2.09998L6.49023 3.86998L14.6202 12L6.49023 20.13Z" fill="%23707070"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_17_4639">%0A<rect width="24" height="24" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/components/TextDisplay.tsx
import { jsx } from "react/jsx-runtime";
function TextDisplay({
  subtitle,
  selectedLanguages,
  onSelectWord,
  // 자막 텍스트 스타일링
  textColor,
  textFontSize,
  textFontWeight,
  textLineHeight
}) {
  return /* @__PURE__ */ jsx("div", { className: ReactScriptPlayer_module_default.textView, children: selectedLanguages.map((language) => /* @__PURE__ */ jsx(
    "p",
    {
      className: ReactScriptPlayer_module_default[`text${language.toUpperCase()}`],
      style: {
        color: textColor,
        fontSize: textFontSize,
        fontWeight: textFontWeight,
        lineHeight: textLineHeight
      },
      onMouseUp: () => {
        const selection = window.getSelection();
        if (selection && selection.toString()) {
          const selectedWord = selection.toString().trim();
          if (selectedWord) {
            onSelectWord(selectedWord, subtitle, 0);
          }
        }
      },
      children: subtitle[language] || `(${language} \uC790\uB9C9\uC774 \uC5C6\uC5B4\uC694!)`
    },
    language
  )) });
}

// src/components/LineView.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function LineView({
  subtitles,
  selectedLanguages,
  currentSubtitleIndex,
  seekTo,
  onSelectWord,
  // 자막 텍스트 스타일링
  textColor,
  textFontSize,
  textFontWeight,
  textLineHeight,
  // 자막 넘기기 버튼
  PrevButton,
  NextButton
}) {
  const totalSubtitles = subtitles.length;
  const handlePrevious = () => {
    if (currentSubtitleIndex > 0) {
      seekTo(subtitles[currentSubtitleIndex - 1].startTimeInSecond);
    }
  };
  const handleNext = () => {
    if (currentSubtitleIndex < totalSubtitles - 1) {
      seekTo(subtitles[currentSubtitleIndex + 1].startTimeInSecond);
    }
  };
  const throttledHandlePrevious = useThrottling({
    buttonClicked: handlePrevious
  });
  const throttledHandleNext = useThrottling({
    buttonClicked: handleNext
  });
  return /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.lineViewContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.skipButtonContainer, children: [
      PrevButton ? /* @__PURE__ */ jsx2(PrevButton, { onClick: throttledHandlePrevious }) : /* @__PURE__ */ jsx2("button", { onClick: throttledHandlePrevious, children: /* @__PURE__ */ jsx2("img", { src: arrow_back_default, alt: "Back Arrow" }) }),
      NextButton ? /* @__PURE__ */ jsx2(NextButton, { onClick: throttledHandleNext }) : /* @__PURE__ */ jsx2("button", { onClick: throttledHandleNext, children: /* @__PURE__ */ jsx2("img", { src: arrow_forward_default, alt: "Forward Arrow" }) })
    ] }),
    subtitles[currentSubtitleIndex] && // TODO(@smosco):사용자가 자막이 언제 넘어갈지 알 수 있도록 progressbar 추가
    /* @__PURE__ */ jsx2(
      TextDisplay,
      {
        subtitle: subtitles[currentSubtitleIndex],
        selectedLanguages,
        onSelectWord,
        textColor,
        textFontSize,
        textFontWeight,
        textLineHeight
      }
    )
  ] });
}

// src/components/BlockView.tsx
import { useRef, useEffect } from "react";

// src/utils/convertTime.ts
function convertTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${paddedMinutes}:${paddedSeconds}`;
}

// src/components/BlockView.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function BlockView({
  subtitles,
  currentSubtitleIndex,
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord,
  // 시간 관련 스타일
  timeColor,
  timeFontSize,
  timeBackgroundColor,
  timeBorderRadius,
  timePadding,
  // 텍스트 관련 스타일
  textColor,
  textFontSize,
  textFontWeight,
  textLineHeight,
  activeTextColor
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      if (currentSubtitleIndex < containerRef.current.children.length - 1) {
        containerRef.current.children[currentSubtitleIndex].scrollIntoView({
          block: "center",
          behavior: "smooth"
        });
      }
    }
  }, [currentSubtitleIndex]);
  return /* @__PURE__ */ jsx3("div", { ref: containerRef, className: ReactScriptPlayer_module_default.blockViewContainer, children: subtitles.map((subtitle, index) => /* @__PURE__ */ jsxs2(
    "div",
    {
      className: ReactScriptPlayer_module_default.subtitleItem,
      onClick: () => {
        seekTo(subtitle.startTimeInSecond);
        onClickSubtitle(subtitle, index);
      },
      style: {
        backgroundColor: index === currentSubtitleIndex ? activeTextColor || "lightgray" : "transparent"
      },
      children: [
        /* @__PURE__ */ jsx3(
          "button",
          {
            className: ReactScriptPlayer_module_default.timeButton,
            style: {
              color: timeColor,
              fontSize: timeFontSize,
              backgroundColor: timeBackgroundColor,
              borderRadius: timeBorderRadius,
              padding: timePadding
            },
            children: convertTime(subtitle.startTimeInSecond)
          }
        ),
        /* @__PURE__ */ jsx3(
          TextDisplay,
          {
            subtitle: subtitles[index],
            selectedLanguages,
            onSelectWord,
            textColor,
            textFontSize,
            textFontWeight,
            textLineHeight
          }
        )
      ]
    },
    index
  )) });
}

// src/utils/findCurrentSubtitleIndex.ts
var findCurrentSubtitleIndex = (subtitles, currentTime, adjustmentTime = 0.05, extendedTime = 0.05) => {
  if (!subtitles || subtitles.length === 0) return null;
  const middleIndex = Math.floor(subtitles.length / 2);
  if (currentTime < subtitles[middleIndex].startTimeInSecond) {
    const index2 = subtitles.findIndex(
      (subtitle) => subtitle.startTimeInSecond - adjustmentTime <= currentTime && subtitle.startTimeInSecond + subtitle.durationInSecond + extendedTime >= currentTime
    );
    return index2 !== -1 ? index2 : null;
  }
  const reversedSubtitles = [...subtitles].reverse();
  const index = reversedSubtitles.findIndex(
    (subtitle) => subtitle.startTimeInSecond - adjustmentTime <= currentTime && subtitle.startTimeInSecond + subtitle.durationInSecond + extendedTime >= currentTime
  );
  return index !== -1 ? subtitles.length - 1 - index : null;
};

// src/components/ReactScriptPlayer.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ReactScriptPlayer({
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
  // 자막 넘기기 버튼
  PrevButton,
  NextButton
}) {
  var _a;
  const currentSubtitleIndex = (_a = findCurrentSubtitleIndex(subtitles, currentTime)) != null ? _a : 0;
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: ReactScriptPlayer_module_default.subtitleContainer,
      style: {
        width: containerWidth,
        height: containerHeight,
        padding: containerPadding,
        backgroundColor: containerBackgroundColor,
        borderColor: containerBorderColor
      },
      children: /* @__PURE__ */ jsxs3("div", { className: ReactScriptPlayer_module_default.displayContainer, children: [
        /* @__PURE__ */ jsx4("p", { className: ReactScriptPlayer_module_default.title, children: "Transcript" }),
        mode === "line" && /* @__PURE__ */ jsx4(
          LineView,
          {
            subtitles,
            currentSubtitleIndex,
            selectedLanguages,
            seekTo,
            onSelectWord,
            textColor,
            textFontSize,
            textFontWeight,
            textLineHeight,
            PrevButton,
            NextButton
          }
        ),
        mode === "block" && /* @__PURE__ */ jsx4(
          BlockView,
          {
            subtitles,
            currentSubtitleIndex,
            selectedLanguages,
            seekTo,
            onClickSubtitle,
            onSelectWord,
            timeColor,
            timeFontSize,
            timeBackgroundColor,
            timeBorderRadius,
            timePadding,
            textColor,
            textFontSize,
            textFontWeight,
            textLineHeight,
            activeTextColor
          }
        )
      ] })
    }
  );
}
export {
  ReactScriptPlayer
};
//# sourceMappingURL=index.js.map

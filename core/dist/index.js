// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ label, onClick }) {
  return /* @__PURE__ */ jsx("button", { onClick, children: label });
}

// src/components/ReactScriptPlayer.tsx
import { useMemo } from "react";

// esbuild-scss-modules-plugin:./ReactScriptPlayer.module.scss
var digest = "b76a105b8a0b6eeffc7bc8b1b704ee3826628f41851fcc5ed4e3cf129ccf28e4";
var classes = { "subtitleContainer": "_subtitleContainer_1xoeq_1", "lineViewContainer": "_lineViewContainer_1xoeq_14", "skipButtonContainer": "_skipButtonContainer_1xoeq_19", "blockViewContainer": "_blockViewContainer_1xoeq_26" };
var css = `._subtitleContainer_1xoeq_1 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  max-width: 590px;
  height: 16rem;
  padding: 1.5rem;
  border: 2px solid #e3e3e3;
  border-radius: 0.5rem;
  overflow-y: auto;
}

._lineViewContainer_1xoeq_14 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
._lineViewContainer_1xoeq_14 ._skipButtonContainer_1xoeq_19 {
  align-self: end;
}
._lineViewContainer_1xoeq_14 ._skipButtonContainer_1xoeq_19 button {
  cursor: pointer;
}

._blockViewContainer_1xoeq_26 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
._blockViewContainer_1xoeq_26 button {
  width: 5rem;
  padding: 8px 12px;
  border: none;
  border-radius: 5rem;
  background-color: #ececec;
  cursor: pointer;
  font-size: 0.8rem;
  color: #5a5a5a;
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

// src/assets/icons/arrow_back.svg
var arrow_back_default = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_17_4620)">%0A<path d="M17.5098 3.86998L15.7298 2.09998L5.83984 12L15.7398 21.9L17.5098 20.13L9.37984 12L17.5098 3.86998Z" fill="%23707070"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_17_4620">%0A<rect width="24" height="24" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/icons/arrow_forward.svg
var arrow_forward_default = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_17_4639)">%0A<path d="M6.49023 20.13L8.26023 21.9L18.1602 12L8.26023 2.09998L6.49023 3.86998L14.6202 12L6.49023 20.13Z" fill="%23707070"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_17_4639">%0A<rect width="24" height="24" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/components/TextDisplay.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function TextDisplay({
  subtitle,
  selectedLanguages,
  onSelectWord
}) {
  return /* @__PURE__ */ jsx2("div", { className: ReactScriptPlayer_module_default.textView, children: selectedLanguages.map((language) => /* @__PURE__ */ jsx2(
    "p",
    {
      className: ReactScriptPlayer_module_default[`text${language.toUpperCase()}`],
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
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function LineView({
  subtitles,
  selectedLanguages,
  currentSubtitleIndex,
  seekTo,
  onSelectWord
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
  return /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.lineViewContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.skipButtonContainer, children: [
      /* @__PURE__ */ jsx3("button", { onClick: handlePrevious, children: /* @__PURE__ */ jsx3("img", { src: arrow_back_default, alt: "Back Arrow" }) }),
      /* @__PURE__ */ jsx3("button", { onClick: handleNext, children: /* @__PURE__ */ jsx3("img", { src: arrow_forward_default, alt: "Forward Arrow" }) })
    ] }),
    subtitles[currentSubtitleIndex] && // TODO:자막 프로그레스바
    /* @__PURE__ */ jsx3(
      TextDisplay,
      {
        subtitle: subtitles[currentSubtitleIndex],
        selectedLanguages,
        onSelectWord
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
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function BlockView({
  subtitles,
  currentSubtitleIndex,
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord
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
  return /* @__PURE__ */ jsx4("div", { ref: containerRef, className: ReactScriptPlayer_module_default.blockViewContainer, children: subtitles.map((subtitle, index) => /* @__PURE__ */ jsxs2(
    "div",
    {
      onClick: () => {
        seekTo(subtitle.startTimeInSecond);
        onClickSubtitle(subtitle, index);
      },
      style: {
        padding: "16px",
        borderRadius: "12px",
        transition: "background-color 0.5s ease-in-out",
        ...index === currentSubtitleIndex && {
          backgroundColor: "lightgray"
        }
      },
      children: [
        /* @__PURE__ */ jsx4("button", { children: convertTime(subtitle.startTimeInSecond) }),
        /* @__PURE__ */ jsx4(
          TextDisplay,
          {
            subtitle: subtitles[index],
            selectedLanguages,
            onSelectWord
          }
        )
      ]
    },
    index
  )) });
}

// src/components/ReactScriptPlayer.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function ReactScriptPlayer({
  mode,
  subtitles,
  selectedLanguages,
  seekTo,
  currentTime,
  onClickSubtitle,
  onSelectWord
}) {
  const reversedSubtitles = useMemo(
    () => [...subtitles].reverse(),
    [subtitles]
  );
  const currentSubtitleIndex = useMemo(() => {
    const index = reversedSubtitles.findIndex(
      (subtitle) => subtitle.startTimeInSecond < currentTime
    );
    return reversedSubtitles.length - 1 - index;
  }, [reversedSubtitles, currentTime]);
  return /* @__PURE__ */ jsx5("div", { className: ReactScriptPlayer_module_default.subtitleContainer, children: /* @__PURE__ */ jsxs3("div", { className: ReactScriptPlayer_module_default.displayContainer, children: [
    mode === "line" && /* @__PURE__ */ jsx5(
      LineView,
      {
        subtitles,
        currentSubtitleIndex,
        selectedLanguages,
        seekTo,
        onSelectWord
      }
    ),
    mode === "block" && /* @__PURE__ */ jsx5(
      BlockView,
      {
        subtitles,
        currentSubtitleIndex,
        selectedLanguages,
        seekTo,
        onClickSubtitle,
        onSelectWord
      }
    )
  ] }) });
}
export {
  Button,
  ReactScriptPlayer
};
//# sourceMappingURL=index.js.map

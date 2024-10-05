// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ label, onClick }) {
  return /* @__PURE__ */ jsx("button", { onClick, children: label });
}

// src/components/ReactScriptPlayer.module.scss
var ReactScriptPlayer_module_default = {};

// src/components/ReactScriptPlayer.tsx
import { useEffect } from "react";

// src/components/LineView.tsx
import { useState } from "react";

// src/assets/icons/arrow_back.svg
var arrow_back_default = "./arrow_back-K4LLZI77.svg";

// src/components/TextDisplay.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function TextDisplay({
  subtitle,
  selectedLanguages,
  onSelectWord
}) {
  console.log(subtitle);
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
  seekTo,
  onSelectWord
}) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const totalSubtitles = subtitles.length;
  const handlePrevious = () => {
    if (currentSubtitleIndex > 0) {
      seekTo(subtitles[currentSubtitleIndex - 1].startTimeInSecond);
      setCurrentSubtitleIndex((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentSubtitleIndex < totalSubtitles - 1) {
      seekTo(subtitles[currentSubtitleIndex + 1].startTimeInSecond);
      setCurrentSubtitleIndex((prev) => prev + 1);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.lineViewContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.skipButtonContainer, children: [
      /* @__PURE__ */ jsx3("button", { onClick: handlePrevious, children: /* @__PURE__ */ jsx3("img", { src: arrow_back_default, alt: "Back Arrow" }) }),
      /* @__PURE__ */ jsx3("button", { onClick: handleNext, children: /* @__PURE__ */ jsx3("img", { src: arrow_back_default, alt: "Forward Arrow" }) })
    ] }),
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
  selectedLanguages,
  seekTo,
  onClickSubtitle,
  onSelectWord
}) {
  return /* @__PURE__ */ jsx4("div", { className: ReactScriptPlayer_module_default.blockViewContainer, children: subtitles.map((subtitle, index) => /* @__PURE__ */ jsxs2(
    "div",
    {
      onClick: () => {
        seekTo(subtitle.startTimeInSecond);
        onClickSubtitle(subtitle, index);
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
  onClickSubtitle,
  onSelectWord
}) {
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsx5("div", { className: ReactScriptPlayer_module_default.subtitleContainer, children: /* @__PURE__ */ jsxs3("div", { className: ReactScriptPlayer_module_default.displayContainer, children: [
    mode === "line" && /* @__PURE__ */ jsx5(
      LineView,
      {
        subtitles,
        selectedLanguages,
        seekTo,
        onSelectWord
      }
    ),
    mode === "block" && /* @__PURE__ */ jsx5(
      BlockView,
      {
        subtitles,
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

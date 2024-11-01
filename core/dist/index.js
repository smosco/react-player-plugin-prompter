// esbuild-scss-modules-plugin:./ReactScriptPlayer.module.scss
var digest = "d9be461180321c88c68e52d9044bc68d261c5362afa1cb316e3f2820b55f8dab";
var classes = { "scriptsContainer": "_scriptsContainer_1ryx0_7", "title": "_title_1ryx0_19", "lineViewContainer": "_lineViewContainer_1ryx0_24", "skipButtonContainer": "_skipButtonContainer_1ryx0_29", "blockViewContainer": "_blockViewContainer_1ryx0_36", "scriptItem": "_scriptItem_1ryx0_42", "timeButton": "_timeButton_1ryx0_47", "textView": "_textView_1ryx0_60", "highlighted": "_highlighted_1ryx0_65" };
var css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

._scriptsContainer_1ryx0_7 {
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

._title_1ryx0_19 {
  font-size: 1.25rem;
  font-weight: 700;
}

._lineViewContainer_1ryx0_24 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
._lineViewContainer_1ryx0_24 ._skipButtonContainer_1ryx0_29 {
  align-self: end;
}
._lineViewContainer_1ryx0_24 ._skipButtonContainer_1ryx0_29 button {
  cursor: pointer;
}

._blockViewContainer_1ryx0_36 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 16rem;
}
._blockViewContainer_1ryx0_36 ._scriptItem_1ryx0_42 {
  padding: 16px;
  border-radius: 12px;
  transition: background-color 0.5s ease-in-out;
}
._blockViewContainer_1ryx0_36 ._scriptItem_1ryx0_42 ._timeButton_1ryx0_47 {
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

._textView_1ryx0_60 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
._textView_1ryx0_60._highlighted_1ryx0_65 {
  background-color: #fef08a;
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
  script,
  selectedLanguages,
  onSelectWord,
  textStyle
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${ReactScriptPlayer_module_default.textView} ${script.isHighlighted ? ReactScriptPlayer_module_default.highlighted : ""}`,
      children: selectedLanguages.map((language) => /* @__PURE__ */ jsx(
        "p",
        {
          className: ReactScriptPlayer_module_default.text,
          style: textStyle,
          onMouseUp: () => {
            const selection = window.getSelection();
            if (selection && selection.toString()) {
              const selectedWord = selection.toString().trim();
              if (selectedWord) {
                onSelectWord(selectedWord, script, 0);
              }
            }
          },
          children: script[language] || `(${language} \uC790\uB9C9\uC774 \uC5C6\uC5B4\uC694!)`
        },
        language
      ))
    }
  );
}

// src/components/LineView.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function LineView({
  scripts,
  selectedLanguages,
  currentScriptIndex,
  seekTo,
  onSelectWord,
  textStyle,
  PrevButton,
  NextButton
}) {
  const totalScripts = scripts.length;
  const handlePrevious = () => {
    if (currentScriptIndex > 0) {
      seekTo(scripts[currentScriptIndex - 1].startTimeInSecond);
    }
  };
  const handleNext = () => {
    if (currentScriptIndex < totalScripts - 1) {
      seekTo(scripts[currentScriptIndex + 1].startTimeInSecond);
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
    scripts[currentScriptIndex] && /* @__PURE__ */ jsx2(
      TextDisplay,
      {
        script: scripts[currentScriptIndex],
        selectedLanguages,
        onSelectWord,
        textStyle
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
  scripts,
  currentScriptIndex,
  selectedLanguages,
  seekTo,
  onClickScript,
  onSelectWord,
  timeStyle,
  textStyle
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current && currentScriptIndex < containerRef.current.children.length - 1) {
      containerRef.current.children[currentScriptIndex].scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  }, [currentScriptIndex]);
  return /* @__PURE__ */ jsx3("div", { ref: containerRef, className: ReactScriptPlayer_module_default.blockViewContainer, children: scripts.map((script, index) => /* @__PURE__ */ jsxs2(
    "div",
    {
      className: ReactScriptPlayer_module_default.scriptItem,
      onClick: () => {
        seekTo(script.startTimeInSecond);
        onClickScript(script, index);
      },
      style: {
        backgroundColor: index === currentScriptIndex ? (textStyle == null ? void 0 : textStyle.activeColor) || "lightgray" : "transparent"
      },
      children: [
        /* @__PURE__ */ jsx3(
          "button",
          {
            className: ReactScriptPlayer_module_default.timeButton,
            style: {
              color: timeStyle == null ? void 0 : timeStyle.color,
              fontSize: timeStyle == null ? void 0 : timeStyle.fontSize,
              backgroundColor: timeStyle == null ? void 0 : timeStyle.backgroundColor,
              borderRadius: timeStyle == null ? void 0 : timeStyle.borderRadius,
              padding: timeStyle == null ? void 0 : timeStyle.padding
            },
            children: convertTime(script.startTimeInSecond)
          }
        ),
        /* @__PURE__ */ jsx3(
          TextDisplay,
          {
            script: scripts[index],
            selectedLanguages,
            onSelectWord,
            textStyle
          }
        )
      ]
    },
    index
  )) });
}

// src/utils/findCurrentScriptIndex.ts
var findCurrentScriptIndex = (scripts, currentTime, adjustmentTime = 0.05, extendedTime = 0.05) => {
  if (!scripts || scripts.length === 0) return null;
  const middleIndex = Math.floor(scripts.length / 2);
  if (currentTime < scripts[middleIndex].startTimeInSecond) {
    const index2 = scripts.findIndex(
      (script) => script.startTimeInSecond - adjustmentTime <= currentTime && script.startTimeInSecond + script.durationInSecond + extendedTime >= currentTime
    );
    return index2 !== -1 ? index2 : null;
  }
  const reversedScripts = [...scripts].reverse();
  const index = reversedScripts.findIndex(
    (script) => script.startTimeInSecond - adjustmentTime <= currentTime && script.startTimeInSecond + script.durationInSecond + extendedTime >= currentTime
  );
  return index !== -1 ? scripts.length - 1 - index : null;
};

// src/components/ReactScriptPlayer.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ReactScriptPlayer({
  mode,
  scripts,
  selectedLanguages,
  seekTo,
  currentTime,
  onClickScript,
  onSelectWord,
  containerStyle,
  textStyle,
  timeStyle,
  PrevButton,
  NextButton
}) {
  var _a;
  const currentScriptIndex = (_a = findCurrentScriptIndex(scripts, currentTime)) != null ? _a : 0;
  const scriptPlayerProps = {
    scripts,
    currentScriptIndex,
    selectedLanguages,
    seekTo,
    onSelectWord,
    textStyle,
    PrevButton,
    NextButton
  };
  return /* @__PURE__ */ jsx4("div", { className: ReactScriptPlayer_module_default.scriptsContainer, style: { ...containerStyle }, children: /* @__PURE__ */ jsxs3("div", { className: ReactScriptPlayer_module_default.displayContainer, children: [
    /* @__PURE__ */ jsx4("p", { className: ReactScriptPlayer_module_default.title, children: "Transcript" }),
    mode === "line" ? /* @__PURE__ */ jsx4(LineView, { ...scriptPlayerProps, textStyle }) : /* @__PURE__ */ jsx4(
      BlockView,
      {
        ...scriptPlayerProps,
        onClickScript,
        timeStyle,
        textStyle
      }
    )
  ] }) });
}
export {
  ReactScriptPlayer
};
//# sourceMappingURL=index.js.map

// esbuild-scss-modules-plugin:./ReactScriptPlayer.module.scss
var digest = "9b88b24bc5ba973e3b88f2c5f7446f6da86e199e8003f6a24f080d5601160c50";
var classes = { "scriptsContainer": "_scriptsContainer_1tyea_7", "title": "_title_1tyea_18", "lineViewContainer": "_lineViewContainer_1tyea_23", "skipButtonContainer": "_skipButtonContainer_1tyea_28", "blockViewContainer": "_blockViewContainer_1tyea_35", "scriptItem": "_scriptItem_1tyea_42", "timeButton": "_timeButton_1tyea_47", "textView": "_textView_1tyea_60", "highlighted": "_highlighted_1tyea_65" };
var css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

._scriptsContainer_1tyea_7 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border: 2px solid #ececec;
  border-radius: 0.75rem;
}

._title_1tyea_18 {
  font-size: 1.25rem;
  font-weight: 700;
}

._lineViewContainer_1tyea_23 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
._lineViewContainer_1tyea_23 ._skipButtonContainer_1tyea_28 {
  align-self: end;
}
._lineViewContainer_1tyea_23 ._skipButtonContainer_1tyea_28 button {
  cursor: pointer;
}

._blockViewContainer_1tyea_35 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 16rem;
  overflow-y: auto;
}
._blockViewContainer_1tyea_35 ._scriptItem_1tyea_42 {
  padding: 16px;
  border-radius: 12px;
  transition: background-color 0.5s ease-in-out;
}
._blockViewContainer_1tyea_35 ._scriptItem_1tyea_42 ._timeButton_1tyea_47 {
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

._textView_1tyea_60 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
._textView_1tyea_60._highlighted_1tyea_65 {
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

// src/components/LineView.tsx
import React from "react";

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
  const handlePrevious = () => {
    const prevIndex = Math.max(0, currentScriptIndex - 1);
    seekTo(scripts[prevIndex].startTimeInSecond);
  };
  const handleNext = () => {
    const nextIndex = Math.min(scripts.length - 1, currentScriptIndex + 1);
    seekTo(scripts[nextIndex].startTimeInSecond);
  };
  return /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.lineViewContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: ReactScriptPlayer_module_default.skipButtonContainer, children: [
      PrevButton ? React.cloneElement(PrevButton, { onClick: handlePrevious }) : /* @__PURE__ */ jsx2("button", { onClick: handlePrevious, children: /* @__PURE__ */ jsx2("img", { src: arrow_back_default, alt: "Back Arrow" }) }),
      NextButton ? React.cloneElement(NextButton, { onClick: handleNext }) : /* @__PURE__ */ jsx2("button", { onClick: handleNext, children: /* @__PURE__ */ jsx2("img", { src: arrow_forward_default, alt: "Forward Arrow" }) })
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
import React2, { useRef, useEffect, useState } from "react";

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
  textStyle,
  FocusButton
}) {
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(true);
  useEffect(() => {
    const handleInteraction = () => {
      setIsFocused(false);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleInteraction);
      container.addEventListener("touchmove", handleInteraction);
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleInteraction);
        container.removeEventListener("touchmove", handleInteraction);
      }
    };
  }, []);
  useEffect(() => {
    if (containerRef.current && isFocused) {
      if (currentScriptIndex < containerRef.current.children.length - 1) {
        const container = containerRef.current;
        const target = container.children[currentScriptIndex];
        const targetTop = target.getBoundingClientRect().top;
        const containerTop = container.getBoundingClientRect().top;
        const relativeTop = targetTop - containerTop;
        container.scrollBy({
          top: relativeTop - 20,
          behavior: "smooth"
        });
      }
    }
  }, [currentScriptIndex, isFocused]);
  return /* @__PURE__ */ jsxs2("div", { className: ReactScriptPlayer_module_default.blockViewContainer, children: [
    FocusButton && // TODO(@smosco): 뭘 바꿨는지 cloneElement를 사용하지 않으면 클릭이 안됨
    React2.cloneElement(FocusButton({ isFocused, setIsFocused }), {
      onClick: () => setIsFocused(!isFocused)
    }),
    /* @__PURE__ */ jsx3("div", { ref: containerRef, className: ReactScriptPlayer_module_default.blockViewContainer, children: scripts.map((script, index) => /* @__PURE__ */ jsxs2(
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
    )) })
  ] });
}

// src/utils/findCurrentScriptIndex.ts
function findCurrentScriptIndex(scripts, currentTime) {
  let left = 0;
  let right = scripts.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const script = scripts[mid];
    if (currentTime >= script.startTimeInSecond && currentTime < script.startTimeInSecond + script.durationInSecond) {
      return mid;
    } else if (currentTime < script.startTimeInSecond) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// src/components/ReactScriptPlayer.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ReactScriptPlayer({
  mode,
  scripts,
  selectedLanguages,
  seekTo,
  getCurrentTime,
  onClickScript,
  onSelectWord,
  containerStyle,
  textStyle,
  timeStyle,
  PrevButton,
  NextButton,
  FocusButton
}) {
  var _a;
  const currentTime = getCurrentTime();
  const currentScriptIndex = (_a = findCurrentScriptIndex(scripts, currentTime)) != null ? _a : 0;
  const handleClickScript = (script, index) => {
    onClickScript(script, index);
  };
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
        FocusButton,
        onClickScript: handleClickScript,
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

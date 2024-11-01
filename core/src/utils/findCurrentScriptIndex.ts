import { Script } from 'interfaces/Scripts';

export const findCurrentScriptIndex = (
  scripts: Script[] | undefined,
  currentTime: number,
  adjustmentTime: number = 0.05, // 자막을 약간 일찍 표시
  extendedTime: number = 0.05, // 자막을 약간 늦게 종료
): number | null => {
  if (!scripts || scripts.length === 0) return null;

  const middleIndex = Math.floor(scripts.length / 2);

  if (currentTime < scripts[middleIndex].startTimeInSecond) {
    // 앞부분 자막 탐색 (순차적으로)
    const index = scripts.findIndex(
      (script) =>
        script.startTimeInSecond - adjustmentTime <= currentTime &&
        script.startTimeInSecond + script.durationInSecond + extendedTime >=
          currentTime,
    );
    return index !== -1 ? index : null;
  }
  // 뒷부분 자막 탐색 (뒤에서부터)
  const reversedScripts = [...scripts].reverse();
  const index = reversedScripts.findIndex(
    (script) =>
      script.startTimeInSecond - adjustmentTime <= currentTime &&
      script.startTimeInSecond + script.durationInSecond + extendedTime >=
        currentTime,
  );
  return index !== -1
    ? scripts.length - 1 - index // 원래 배열 기준 인덱스 반환
    : null;
};

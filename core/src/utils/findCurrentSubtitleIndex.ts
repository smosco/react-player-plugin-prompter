import { Subtitle } from 'interfaces/Scripts';

export const findCurrentSubtitleIndex = (
  subtitles: Subtitle[] | undefined,
  currentTime: number,
  adjustmentTime: number = 0.05, // 자막을 약간 일찍 표시
  extendedTime: number = 0.05, // 자막을 약간 늦게 종료
): number | null => {
  if (!subtitles || subtitles.length === 0) return null;

  const middleIndex = Math.floor(subtitles.length / 2);

  if (currentTime < subtitles[middleIndex].startTimeInSecond) {
    // 앞부분 자막 탐색 (순차적으로)
    const index = subtitles.findIndex(
      (subtitle) =>
        subtitle.startTimeInSecond - adjustmentTime <= currentTime &&
        subtitle.startTimeInSecond + subtitle.durationInSecond + extendedTime >=
          currentTime,
    );
    return index !== -1 ? index : null;
  }
  // 뒷부분 자막 탐색 (뒤에서부터)
  const reversedSubtitles = [...subtitles].reverse();
  const index = reversedSubtitles.findIndex(
    (subtitle) =>
      subtitle.startTimeInSecond - adjustmentTime <= currentTime &&
      subtitle.startTimeInSecond + subtitle.durationInSecond + extendedTime >=
        currentTime,
  );
  return index !== -1
    ? subtitles.length - 1 - index // 원래 배열 기준 인덱스 반환
    : null;
};

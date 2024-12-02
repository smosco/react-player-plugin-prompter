import { Script } from 'interfaces/Scripts';

export function findCurrentScriptIndex(
  scripts: Script[],
  currentTime: number,
): number {
  let left = 0;
  let right = scripts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const script = scripts[mid];

    if (
      currentTime >= script.startTimeInSecond &&
      currentTime < script.startTimeInSecond + script.durationInSecond
    ) {
      return mid;
    } else if (currentTime < script.startTimeInSecond) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left; // 가장 가까운 다음 자막 인덱스 반환
}

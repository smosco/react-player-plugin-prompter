import { Script } from '../interfaces/Scripts';

export const moveToScriptAtIndex = <T extends string>(
  index: number,
  scripts: Script<T>[],
  seekTo: (timeInSeconds: number) => void,
) => {
  // 유효한 인덱스인지 확인
  if (index < 0 || index >= scripts.length - 1) {
    console.warn('Invalid script index:', index);
    return;
  }

  // 스크립트 시작 시간으로 이동
  console.log('Seeking to:', scripts[index]);

  seekTo(scripts[index].startTimeInSecond);
};

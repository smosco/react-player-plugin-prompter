// findClickedIndex.ts
import { Script } from 'interfaces/Scripts';

export const findClickedIndex = (
  scripts: Script[] | undefined,
  clickedIndex: number,
): number | null => {
  if (!scripts || scripts.length === 0) return null;
  return clickedIndex >= 0 && clickedIndex < scripts.length
    ? clickedIndex
    : null;
};

import React from 'react';
import styles from './ReactScriptPlayer.module.scss';

export interface SwitchButtonProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isToggle: boolean;
}

export function SwitchButton({
  toggle,
  isToggle,
}: SwitchButtonProps): JSX.Element {
  return (
    <button
      className={styles.switchButton}
      type="button"
      onClick={() => {
        toggle((prev: boolean) => !prev);
      }}
    >
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isToggle}
          onChange={() => {
            toggle((prev: boolean) => !prev);
          }}
        />
        <span className={styles.slider}></span>
      </label>
      <span>자막 가운데 정렬</span>
    </button>
  );
}

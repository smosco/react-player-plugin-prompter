import { useState, useCallback } from 'react';

interface ThrottlingProps<T> {
  buttonClicked: (arg: T) => void;
  delay?: number; // Optional delay prop
}

export default function useThrottling<T>({
  buttonClicked,
  delay = 1000,
}: ThrottlingProps<T>) {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledCallback = useCallback(
    (arg: T) => {
      if (!isThrottled) {
        buttonClicked(arg);
        setIsThrottled(true);
        setTimeout(() => {
          setIsThrottled(false);
        }, delay);
      }
    },
    [isThrottled, buttonClicked, delay],
  );

  return throttledCallback;
}

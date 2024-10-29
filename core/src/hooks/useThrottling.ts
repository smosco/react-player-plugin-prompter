import { useState, useCallback } from 'react';

interface ThrottlingProps {
  buttonClicked: () => void;
  delay?: number; // Optional delay prop
}

export default function useThrottling({
  buttonClicked,
  delay = 300,
}: ThrottlingProps) {
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

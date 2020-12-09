import { useRef } from 'react';

function useThrottle(callback: Function, time: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...param: Parameters<any>) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback(...param);
        timer.current = null;
      }, time);
    }
  };
}

export default useThrottle;

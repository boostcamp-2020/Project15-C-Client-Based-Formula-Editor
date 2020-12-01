import { useEffect } from 'react';

function useListener(callback: () => void, ...args: any[]): void {
  useEffect(() => {
    callback();
  }, [...args]);
}

export default useListener;

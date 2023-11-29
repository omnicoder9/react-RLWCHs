import { useState, useEffect } from 'react';

//naming conventions:
//1. Component names start with a capital letter. Components must return JSX.
//2. Hook names must start with 'use' followed by a capital letter.  Hooks can return arbitrary values.

//Should all functions called during rendering start with the 'use' prefix?  
//No.  If your function doesn't call any Hooks, avoid the 'use' prefix.  Use something like 'get' instead. 
//https://react.dev/learn/reusing-logic-with-custom-hooks#should-all-functions-called-during-rendering-start-with-the-use-prefix
//In principle, you could make a Hook that doesn’t call other Hooks. This is often confusing and limiting so it’s best to avoid that pattern. However, there may be rare cases where it is helpful. 
//For example, maybe your function doesn’t use any Hooks right now, but you plan to add some Hook calls to it in the future. Then it makes sense to name it with the use prefix.
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
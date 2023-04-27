import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import type { DebouncedFunc } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TCallback = (...args: any[]) => any;

interface IOptionsProps {
  delay?: number;
  invokeType?: 'throttle' | 'debounce';
}

export function useInvokeFunc<T extends TCallback>(
  callback: T,
  { delay = 500, invokeType = 'debounce' }: IOptionsProps = {},
): DebouncedFunc<T> {
  const invoke = invokeType === 'debounce' ? debounce : throttle;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(invoke(callback, delay), []);
}

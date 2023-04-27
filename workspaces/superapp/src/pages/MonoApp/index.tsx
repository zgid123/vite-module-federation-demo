import * as React from 'react';

import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

const Mono = lazy(() => import('mono/App'));

export function MonoApp(): JSX.Element {
  return (
    <Suspense fallback={<Spinner />}>
      <Mono />
    </Suspense>
  );
}

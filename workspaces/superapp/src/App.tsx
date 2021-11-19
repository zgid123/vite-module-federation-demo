import * as React from 'react';

import { lazy, Suspense } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { Overview } from 'pages/Overview';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MonoApp = lazy(() => import('mono/App'));

function App(): JSX.Element {
  return (
    <Box bgColor='gray.100' w='100vw' h='100vh'>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route
          path='/monoApp/*'
          element={
            <Suspense fallback={<Spinner />}>
              <MonoApp />
            </Suspense>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;

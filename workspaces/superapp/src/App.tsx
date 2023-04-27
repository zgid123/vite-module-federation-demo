import * as React from 'react';

import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { MonoApp } from 'pages/MonoApp';
import { Overview } from 'pages/Overview';

function App(): JSX.Element {
  return (
    <Box bgColor='gray.100' w='100vw' h='100vh'>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/monoApp/*' element={<MonoApp />} />
      </Routes>
    </Box>
  );
}

export default App;

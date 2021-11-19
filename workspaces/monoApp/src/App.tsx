import * as React from 'react';

import { Box, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Box bgColor='gray.100' w='100vw' h='100vh'>
      <Routes>
        <Route path='/' element={<Heading>MonoApp</Heading>} />
      </Routes>
    </Box>
  );
}

export default App;

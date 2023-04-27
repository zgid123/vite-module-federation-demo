import * as React from 'react';

import { useRef } from 'react';
import { Toolbar } from '@libs/rc-components';
import { ViewportList } from 'react-viewport-list';
import { Link, Route, Routes } from 'react-router-dom';
import { Box, Stack, Heading, Tooltip } from '@chakra-ui/react';

import { CustomDrawer } from 'CustomDrawer';

const items = new Array(100).fill(null).map((index) => ({
  title: index,
}));

function App(): JSX.Element {
  const ref = useRef(null);

  return (
    <Box bgColor='gray.100' w='100vw' h='100vh'>
      <Toolbar>
        <CustomDrawer />
      </Toolbar>
      <Routes>
        <Route
          path='/'
          element={
            <Stack>
              <Heading>MonoApp 213</Heading>
              <Link to='/'>To Superapp</Link>
              <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                Hover me
              </Tooltip>
              <ViewportList viewportRef={ref} items={items}>
                {(item, index) => (
                  <div
                    key={index}
                    className={`item${index % 2 === 0 ? '' : ' odd'}`}
                  >
                    {`${index + 1} ${item.title}`}
                  </div>
                )}
              </ViewportList>
            </Stack>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;

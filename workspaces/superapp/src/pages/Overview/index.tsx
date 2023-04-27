import * as React from 'react';

import { Link } from 'react-router-dom';
import { Heading, Stack } from '@chakra-ui/react';

export function Overview(): JSX.Element {
  return (
    <Stack>
      <Heading>Overview from Superapp</Heading>
      <Link to='/monoApp'>To MonoApp</Link>
    </Stack>
  );
}

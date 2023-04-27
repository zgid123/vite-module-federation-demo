import * as React from 'react';

import { Box, Tooltip } from '@chakra-ui/react';

import type { ReactNode } from 'react';
import type { ComponentWithAs, IconProps } from '@chakra-ui/react';

interface IToolbarButtonProps {
  children: ReactNode;
  tooltipText?: string;
  onClick?: () => void;
  icon?: ComponentWithAs<'svg', IconProps>;
}

export function ToolbarButton({
  onClick,
  children,
  tooltipText,
}: IToolbarButtonProps): JSX.Element {
  return (
    <Tooltip label={tooltipText}>
      <Box pos='relative' onClick={onClick}>
        {children}
      </Box>
    </Tooltip>
  );
}

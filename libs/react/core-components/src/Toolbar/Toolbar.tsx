import * as React from 'react';

import { useMemo, useEffect, useRef } from 'react';
import { Flex, Stack, useBoolean } from '@chakra-ui/react';

import type { ReactNode } from 'react';
import type { StackProps } from '@chakra-ui/react';

import { hexToRGB } from '../utils';
import { useInvokeFunc } from '../hooks/useInvokeFunc';

export interface IToolbarProps extends Omit<StackProps, 'children'> {
  children: ReactNode;
  placement?: 'left' | 'right';
}

export function Toolbar({
  children,
  placement = 'right',
  ...props
}: IToolbarProps): JSX.Element {
  const stackRef = useRef<HTMLDivElement>(null);
  const [isOpen, { on, off }] = useBoolean(true);

  const additionalProps = useMemo<StackProps>(() => {
    if (placement === 'left') {
      return {
        left: 0,
        borderRightRadius: '10px',
      };
    }

    return {
      right: 0,
      borderLeftRadius: '10px',
    };
  }, [placement]);

  const offset = useMemo<number>(() => {
    const toolbarWidth = stackRef.current?.offsetWidth || 48;

    if (isOpen) {
      if (placement === 'left') {
        return 0;
      }

      return 0;
    }

    if (placement === 'left') {
      return -toolbarWidth;
    }

    return toolbarWidth;
  }, [isOpen, placement]);

  const handleOffSlide = useInvokeFunc(
    () => {
      off();
    },
    {
      delay: 2000,
    },
  );

  const content = useMemo(() => {
    let result: ReactNode[] = [];

    if (Array.isArray(children)) {
      result = children;
    } else {
      result = [children];
    }

    return result.map((child, index) => {
      return (
        <Flex
          w={8}
          h={8}
          key={index}
          cursor='pointer'
          bgColor='gray.200'
          borderRadius='10px'
          alignItems='center'
          justifyContent='center'
        >
          {child}
        </Flex>
      );
    });
  }, [children]);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const width = window.innerWidth;
      const toolbarWidth = stackRef.current?.offsetWidth || 48;
      let showToolbar = false;

      if (placement === 'right') {
        showToolbar =
          width - toolbarWidth <= event.screenX && event.screenX <= width;
      } else {
        showToolbar = event.screenX <= toolbarWidth;
      }

      if (showToolbar) {
        on();
        handleOffSlide.cancel();
      } else {
        handleOffSlide();
      }
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleOffSlide, on, placement]);

  return (
    <Stack
      px={2}
      py={2.5}
      top='50%'
      minW='46px'
      pos='fixed'
      ref={stackRef}
      bgColor='white'
      transition='transform .3s linear'
      transform={`translateX(${offset}px)`}
      boxShadow={`0px 0px 50px 0px ${hexToRGB('#523f69', 0.35)}`}
      {...additionalProps}
      {...props}
    >
      {content}
    </Stack>
  );
}

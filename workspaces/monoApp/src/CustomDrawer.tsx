import * as React from 'react';

import { ToolbarButton } from '@libs/rc-components';
import {
  Text,
  Button,
  Drawer,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

export function CustomDrawer(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ToolbarButton onClick={onOpen} tooltipText='?????'>
        <Text>????</Text>
      </ToolbarButton>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Header</DrawerHeader>
          <DrawerBody>
            <Heading>Hello</Heading>
          </DrawerBody>
          <DrawerFooter>
            <Button mr={3} onClick={onClose} colorScheme='gray'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

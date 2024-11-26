import type { ButtonProps as ChakraCloseButtonProps } from '@chakra-ui/react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import { X } from 'lucide-react';
import * as React from 'react';

export interface CloseButtonProps extends ChakraCloseButtonProps {}

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton
      variant="ghost"
      aria-label="Close"
      ref={ref}
      {...props}
    >
      {props.children ?? <X />}
    </ChakraIconButton>
  );
});

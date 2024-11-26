import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react/box';

function PlayerCount() {
  return (
    <Box
      borderColor="red.400"
      borderWidth="1px"
      height="100%"
      width="100%"
    >
      <Heading size="2xl">Character Counts</Heading>
    </Box>
  );
}

export default PlayerCount;

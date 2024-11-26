import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react/box';

function Executions() {
  return (
    <Box
      borderColor="red.400"
      borderWidth="1px"
      height="100%"
      width="100%"
    >
      <Heading size="2xl">Votes</Heading>
    </Box>
  );
}

export default Executions;

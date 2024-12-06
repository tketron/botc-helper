import { Box, Button, Heading } from '@chakra-ui/react';

function GameState() {
  return (
    <Box
      borderColor="red.400"
      borderWidth="1px"
      height="100%"
      width="100%"
    >
      <Heading size="2xl">Game State</Heading>
      <Button>Good Wins!</Button>
      <Button>Evil Wins!</Button>
      <Heading size="xl">Daytime</Heading>
      <Heading size="xl">Nighttime</Heading>
      <Heading size="xl">Alive Players</Heading>
    </Box>
  );
}

export default GameState;

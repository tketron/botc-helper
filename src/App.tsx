import { Box } from '@chakra-ui/react/box';
import './App.css';
import Countdown from './components/Countdown';
import Script from './components/scripts/Script';
import PlayerCount from './components/PlayerCount';
import Executions from './components/Executions';
import GameState from './components/GameState';

function App() {
  return (
    <Box
      height="dvh"
      width="dvw"
      //   height="900px"
      //   width="1600px"
      display="grid"
      gridTemplateRows="repeat(4, 1fr)"
      gridTemplateColumns="repeat(2, 1fr)"
      gap="2"
    >
      <Box gridRow="1 / span 3">
        <Script />
      </Box>
      <Box gridRow="4">
        <PlayerCount />
      </Box>
      <Box>
        <Countdown />
      </Box>
      <Box gridRow="span 2">
        <Executions />
      </Box>
      <Box>
        <GameState />
      </Box>
    </Box>
  );
}

export default App;

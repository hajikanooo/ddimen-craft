import "./App.css";
import { Box, Stack } from "@mui/material";
import { Playground } from "./core-logic/entities/playground";

const GameCanvas = () => {
  return (
    <canvas
      width={window.innerWidth}
      height={window.innerHeight}
      ref={async (canvas) => {
        if (!canvas) {
          return;
        }
        Playground.InitCanvas({ canvas });
      }}
    ></canvas>
  );
};

function App() {
  return (
    <main className="w-full h-full">
      <Stack
        className="h-full"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Box>
          <GameCanvas />
        </Box>
      </Stack>
    </main>
  );
}

export default App;

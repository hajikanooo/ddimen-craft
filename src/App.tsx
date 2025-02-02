import "./App.css";
import Button from "@mui/material/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Box, Stack } from "@mui/material";

// const GameCanvas = () => {
//   return <canvas></canvas>;
// };

function App() {
  return (
    <main className="w-full h-full">
      <Stack
        className="h-full"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        {/* <Box>
          <GameCanvas />
        </Box> */}
        <Button variant="contained" endIcon={<AccountBalanceIcon />}>
          Hello world
        </Button>
      </Stack>
    </main>
  );
}

export default App;

import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Timer from "./Timer";
import StopwatchTimer from "./StopwatchTimer";

function App() {
 
  return (
    <DIV>
       <Timer />
       <StopwatchTimer />
    </DIV>
  );
}

export default App;

const DIV = styled(Box)({
  background: '#F2F2F2',
  border: 0,
  borderRadius: 1,
  padding: '50px 50px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  '& > div': {
      borderRadius: '20px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
      height: '60vh'
  }
});

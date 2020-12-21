import { Grommet, Heading } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
     <Heading>Oxygen</Heading>
    </Grommet>
  );
}

export default App;

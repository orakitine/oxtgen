import React from 'react'
import { Grommet, Heading } from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

const App: React.FC = () => {
  return (
    <Grommet theme={theme}>
      <Heading>Oxygen</Heading>
    </Grommet>
  )
}

export default App

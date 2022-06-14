import React from 'react';

const App: React.FC<{name: string}> = (props) => {
  return (
    <h1>Hello world {props.name} </h1>
  )
}

export default App;

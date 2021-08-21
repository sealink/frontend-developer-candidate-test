import React from 'react';
import './App.scss';
import Container from './layouts/Container';
import Info from './components/Info';

const App = () => {
  return (
    <>
      <Info />
      <Container>
        <h3>Example of another website using this reusable component</h3>
      </Container>
      <Info />
    </>
  );
};

export default App;

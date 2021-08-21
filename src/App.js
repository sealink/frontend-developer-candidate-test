import React from 'react';
import './App.scss';
import Container from './layouts/Container';
import Info from './components/Info';

// fetch data (e.g. from a headless CMS)
import events from './data/events.json';
import sealink from './data/sealink.json';

const App = () => {
  return (
    <>
      <Info data={events} />
      <Container>
        <p>Example of another website using this reusable component</p>
      </Container>
      <Info
        data={sealink}
        limit={5}
        title='SeaLink'
        backgroundColor='#008fd5'
        textColor='#f99d1c'
        accordionTextColor='var(--cream)'
        accordionLinkColor='#f99d1c'
        accordionDividerColor='#f99d1c'
      />
    </>
  );
};

export default App;

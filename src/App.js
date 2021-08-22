import React from 'react';
import './App.scss';
import Info from './components/Info';

// fetch data (e.g. from a headless CMS)
import events from './data/events.json';
import sealink from './data/sealink.json';

const App = () => {
  return (
    <>
      <Info data={events} />
      <div>
        <p style={{ padding: '200px var(--baseSpace) var(--baseSpace)' }}>
          An example of another website using this reusable component. It is
          easy to change text, colours, and so on with props.
        </p>
      </div>
      <Info
        data={sealink}
        limit={5}
        title='SeaLink'
        backgroundColor='#008fd5'
        textColor='#f99d1c'
        accordionTextColor='var(--cream)'
        accordionLinkColor='#f99d1c'
        accordionLinkHoverColor=''
        accordionDividerColor='#f99d1c'
      />
    </>
  );
};

export default App;

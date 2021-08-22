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
        infoContainerMaxHeight='100%'
        titleTextColor='#f99d1c'
        accordionTextColor='var(--cream)'
        accordionLinkColor='#f99d1c'
        accordionLinkHoverColor=''
        accordionDividerColor='#f99d1c'
        buttonText='SEE ALL'
        buttonBackgroundColor='#f99d1c'
        buttonTextColor='var(--cream)'
        buttonBorderRadius='4px'
        buttonBoxShadow='0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
        buttonHoverBackgroundColor=''
        buttonLink='https://brillianttravels.com.au/our-family/sealink/'
      />
    </>
  );
};

export default App;

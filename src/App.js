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

      {/* The code below is just examples and comments. This is not for the code test */}
      <div>
        <p
          style={{
            padding: '200px var(--baseSpace) var(--baseSpace)',
            fontSize: '18px',
          }}
        >
          I normally use CSS variables, Flexbox and Grid for layout; however, I
          used Bootstrap in the past.&nbsp;
          <a
            href='https://www.shankaramassageandyoga.com.au/index.html'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              background: '#f99d1c',
              color: 'white',
              padding: '5px',
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
          >
            Link Here (example)
          </a>
        </p>
        <p style={{ padding: 'var(--baseSpace)', fontSize: '18px' }}>
          An example of another website using this reusable component. It is
          easy to change text, colours, and so on with props.
        </p>
      </div>
      <Info
        data={sealink}
        limit={5}
        infoTitle='SeaLink'
        infoBackgroundColor='#008fd5'
        infoContainerMaxHeight='100%'
        infoTitleTextColor='#f99d1c'
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
      />
    </>
  );
};

export default App;

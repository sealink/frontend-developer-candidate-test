import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';

const Accordion = ({
  activeId,
  onToggle,
  data,
  limit = 3,
  textColor = 'white',
  linkColor = 'var(--gold-300)',
  linkHoverColor = '',
  dividerColor = 'var(--gold-200)',
}) => {
  const contentEl = useRef('');

  const accordionItems = data?.map((item, index) => {
    while (index < limit) {
      return (
        <Fragment key={item.id}>
          <button type='button' onClick={() => onToggle(item.id)}>
            <p className='p2 bold'>{item.smallTitle}</p>
            <h2
              className={`h3-montserrat ${
                (index === 0 && !activeId) || activeId === item.id ? 'bold' : ''
              }`}
            >
              {item.title}
            </h2>
          </button>
          <div
            ref={contentEl}
            className={`accordion-content ${
              (index === 0 && !activeId) || activeId === item.id ? 'open' : ''
            }`}
            style={
              (index === 0 && !activeId) || activeId === item.id
                ? { height: contentEl.current.scrollHeight }
                : { height: '0px' }
            }
          >
            <p className='p1'>{item.content}</p>
            <p className='p2 bold'>
              <a href={item.link}>{item.linkTitle}</a>
            </p>
          </div>
          <hr />
        </Fragment>
      );
    }
  });

  return (
    <AccordionWrapper
      textColor={textColor}
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
      dividerColor={dividerColor}
    >
      {accordionItems}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  --textColor: ${(props) => props.textColor};
  --linkColor: ${(props) => props.linkColor};
  --linkHoverColor: ${(props) => props.linkHoverColor || 'var(--linkColor)'};
  --hoverFilterBrightness: ${(props) =>
    props.linkHoverColor ? 'brightness(1)' : 'brightness(1.1)'};
  --dividerColor: ${(props) => props.dividerColor};

  --textMarginBottom: 0.85rem;

  color: var(--textColor);

  h2,
  p {
    margin-bottom: var(--textMarginBottom);
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
  }

  .accordion-content {
    height: 0;
    overflow: hidden;

    transition: height 0.2s ease;

    &.open {
      height: auto;
    }

    a {
      color: var(--linkColor);
      transition: color 0.3s ease, filter 0.3s ease;

      &:hover,
      &:focus {
        color: var(--linkHoverColor);
        filter: var(--hoverFilterBrightness);
      }
    }
  }

  hr {
    margin-top: calc(var(--textMarginBottom) * 0.5);
    margin-bottom: calc(var(--textMarginBottom) * 1.5);
    border-top: 1px solid var(--dividerColor);
    border-right: none;
    border-left: none;
    border-bottom: none;
  }

  /* last item <hr> will not appear */
  > *:last-child {
    display: none;
  }
`;

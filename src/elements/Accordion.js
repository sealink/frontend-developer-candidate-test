import React, { Fragment, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Accordion = ({
  activeId,
  handleActiveId,
  data = [],
  limitItemNumber = 3,
  textColor = 'white',
  linkColor = 'var(--gold-300)',
  linkHoverColor = '',
  dividerColor = 'var(--gold-200)',
}) => {
  const elementRefs = useRef([]);
  const [accordionContentHeight, setAccordionContentHeight] = useState('0px');

  useEffect(() => {
    if (!elementRefs.current[0]) {
      return;
    }

    setAccordionContentHeight(`${elementRefs.current[0].scrollHeight}px`);
  }, []);

  const handleAccordionContentHeight = (index) => {
    setAccordionContentHeight(`${elementRefs.current[index].scrollHeight}px`);
  };

  const accordionItems = data?.map(
    ({ id, smallTitle, title, content, linkTitle, link }, index) => {
      while (index < limitItemNumber) {
        return (
          <Fragment key={id}>
            <button
              type='button'
              onClick={() => {
                handleActiveId(id);
                handleAccordionContentHeight(index);
              }}
            >
              <p className='p2 bold'>{smallTitle}</p>
              <h2
                className={`h2-montserrat ${
                  (!activeId && index === 0) || id === activeId ? 'bold' : ''
                }`}
              >
                {title}
              </h2>
            </button>
            <div
              ref={(element) => {
                elementRefs.current[index] = element;
              }}
              className='accordion-content'
              data-item-active={
                (!activeId && index === 0) || id === activeId ? 'active' : ''
              }
            >
              <p className='p1'>{content}</p>
              <p className='p2 bold'>
                <a href={link}>{linkTitle}</a>
              </p>
            </div>
            <hr />
          </Fragment>
        );
      }
    }
  );

  return (
    <AccordionWrapper
      textColor={textColor}
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
      dividerColor={dividerColor}
      accordionContentHeight={accordionContentHeight}
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

  --accordionContentHeight: ${(props) => props.accordionContentHeight};

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

    &[data-item-active='active'] {
      height: var(--accordionContentHeight);
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

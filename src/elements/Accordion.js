import React, { Fragment } from 'react';
import styled from 'styled-components';

const Accordion = ({
  data,
  limit = 3,
  textColor = 'white',
  linkColor = 'var(--gold-300)',
  linkHoverColor = '',
  dividerColor = 'var(--gold-200)',
}) => {
  const accordionItems = data?.map((item, index) => {
    while (index < limit) {
      return (
        <Fragment key={item.id}>
          <p className='p2 bold'>{item.smallTitle}</p>
          <h2 className='h3-montserrat'>{item.title}</h2>
          <p className='p1'>{item.content}</p>
          <p className='p2 bold'>
            <a href={item.link}>{item.linkTitle}</a>
          </p>
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
  --filterBrightness: ${(props) =>
    props.linkHoverColor ? 'brightness(1)' : 'brightness(1.1)'};
  --dividerColor: ${(props) => props.dividerColor};

  --textMarginBottom: 0.85rem;

  color: var(--textColor);

  h2,
  p {
    margin-bottom: var(--textMarginBottom);
  }

  a {
    color: var(--linkColor);
    transition: color 0.3s ease, filter 0.3s ease;

    &:hover,
    &:focus {
      color: var(--linkHoverColor);
      filter: var(--filterBrightness);
    }
  }

  hr {
    margin: calc(var(--textMarginBottom) * 2) 0;
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

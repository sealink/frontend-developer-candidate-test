import React, { Fragment } from 'react';
import styled from 'styled-components';

const Accordion = ({
  data,
  limit = 3,
  textColor = 'white',
  linkColor = 'var(--gold-300)',
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
            <a className='accordion-link' href={item.link}>
              {item.linkTitle}
            </a>
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
  --dividerColor: ${(props) => props.dividerColor};

  color: var(--textColor);

  h2,
  p {
    margin-bottom: 1.05rem;
  }

  .accordion-link {
    color: var(--linkColor);
  }

  hr {
    margin: 2.1rem 0;
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

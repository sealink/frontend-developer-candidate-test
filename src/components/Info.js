import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { media } from '../utilities';
import { Container, Accordion, Button } from '../elements';
import { ChevronRightSvg } from '../icons';

const Info = ({
  data,
  limit = 3,
  title = "what's on",
  backgroundColor = 'var(--blue-300)',
  infoContainerMaxHeight = '550px',
  titleTextColor = 'white',
  accordionTextColor = 'white',
  accordionLinkColor = 'var(--gold-300)',
  accordionLinkHoverColor = '',
  accordionDividerColor = 'var(--gold-200)',
  buttonText = 'SEE ALL EVENTS',
  buttonBackgroundColor = 'var(--gold-300)',
  buttonTextColor = 'white',
  buttonBorderRadius = '0',
  buttonBoxShadow = 'none',
  buttonHoverBackgroundColor = '',
  buttonLink = '#',
}) => {
  const [limitItemNumber, setLimitItemNumber] = useState(limit);
  const [activeId, setActiveId] = useState('');

  const handleToggle = (id) => {
    setActiveId(id);
  };

  const imageItems = data?.map((item, index) => {
    while (index < limitItemNumber) {
      return (
        <Fragment key={item.id}>
          <img
            className={
              (index === 0 && !activeId) || activeId === item.id
                ? 'active-image'
                : ''
            }
            src={item.image}
            alt={item.title}
          />
        </Fragment>
      );
    }
  });

  return (
    <InfoWrapper
      backgroundColor={backgroundColor}
      infoContainerMaxHeight={infoContainerMaxHeight}
      titleTextColor={titleTextColor}
      limitItemNumber={limitItemNumber}
    >
      <div className='info-top-title'>
        <h2>{title}</h2>
      </div>
      <div className='info-background'>
        <Container className='info-container'>
          <div className='info-side-title'>
            <h2>{title}</h2>
          </div>
          <div className='info-image'>
            <div className='image-ratio-container'>{imageItems}</div>
          </div>
          <div className='info-accordion'>
            <Accordion
              activeId={activeId}
              onToggle={handleToggle}
              data={data}
              limitItemNumber={limitItemNumber}
              textColor={accordionTextColor}
              linkColor={accordionLinkColor}
              linkHoverColor={accordionLinkHoverColor}
              dividerColor={accordionDividerColor}
            />
            <Button
              type='button'
              className='info-general-button'
              backgroundColor={buttonBackgroundColor}
              color={buttonTextColor}
              borderRadius={buttonBorderRadius}
              boxShadow={buttonBoxShadow}
              hoverBackgroundColor={buttonHoverBackgroundColor}
              onClick={() => setLimitItemNumber(data.length)}
            >
              {buttonText}
              &nbsp;
              <ChevronRightSvg stroke={buttonTextColor} />
            </Button>
          </div>
        </Container>
      </div>
    </InfoWrapper>
  );
};

export default Info;

const InfoWrapper = styled.section`
  --infoBackgroundColor: ${(props) => props.backgroundColor};
  --infoContainerMaxHeight: ${(props) => props.infoContainerMaxHeight};
  --infoTitleTextColor: ${(props) => props.titleTextColor};

  --infoAccordionPaddingTopMultiplierMediaXl: ${(props) =>
    props.limitItemNumber > 3 ? 1 : 2};
  --infoAccordionPaddingTopMultiplierMediaXxl: ${(props) =>
    props.limitItemNumber > 3 ? 1 : 3};

  margin-bottom: 120px;

  ${media.md} {
    margin-bottom: 130px;
  }

  ${media.lg} {
    margin-bottom: 150px;
  }

  .info-top-title {
    background: var(--infoBackgroundColor);

    display: flex;
    align-items: center;

    height: 120px;
    padding: 0 var(--baseSpace);

    ${media.md} {
      height: 130px;
    }

    ${media.lg} {
      background: transparent;
      height: 150px;
    }

    h2 {
      color: var(--infoTitleTextColor);

      ${media.lg} {
        display: none;
      }
    }
  }

  .info-background {
    background: var(--infoBackgroundColor);

    .info-container {
      padding-bottom: var(--baseSpace);

      ${media.md} {
        display: flex;
        justify-content: center;
      }

      ${media.lg} {
        max-height: var(--infoContainerMaxHeight);
        padding-bottom: 0;
      }

      .info-side-title {
        display: none;

        ${media.lg} {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 15%;
        }

        h2 {
          color: var(--infoTitleTextColor);
          white-space: nowrap;
          transform: rotate(-90deg);
          padding-top: 50px;
        }
      }

      .info-image {
        width: 100%;
        margin-bottom: var(--baseSpace);

        /* keep 360 : 250 ratio of image */
        position: relative;
        padding-top: 69.44%;

        ${media.md} {
          width: 45%;
          margin-bottom: 0;

          /* cancel ratio of image */
          padding-top: 0;
        }

        ${media.lg} {
          width: 35%;
        }

        .image-ratio-container {
          /* keep 360 : 250 ratio of image */
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          ${media.md} {
            /* cancel ratio of image */
            position: static;
          }

          ${media.lg} {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          img {
            display: none; /* ToDo */

            width: 100%;
            height: 100%;
            object-fit: cover;

            &.active-image {
              display: block; /* ToDo */
              animation: fade-in 0.5s ease;
            }

            ${media.md} {
              max-height: 550px; /* ToDo */
            }

            ${media.lg} {
              height: 110%;
              max-height: 650px; /* ToDo */
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translate3d(-200px, 0, 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
        }
      }

      .info-accordion {
        width: 100%;

        ${media.md} {
          width: 55%;
          padding-left: calc(var(--baseSpace) * 2);
        }

        ${media.lg} {
          width: 50%;
          padding-top: var(--baseSpace);
        }

        ${media.xl} {
          padding-top: calc(
            var(--baseSpace) * var(--infoAccordionPaddingTopMultiplierMediaXl)
          );
          padding-left: calc(var(--baseSpace) * 3);
        }

        ${media.xxl} {
          padding-top: calc(
            var(--baseSpace) * var(--infoAccordionPaddingTopMultiplierMediaXxl)
          );
          padding-left: calc(var(--baseSpace) * 5);
        }

        .info-general-button {
          display: flex;
          justify-content: center;
          align-items: center;

          margin: var(--baseSpace) 0;
        }
      }
    }
  }
`;

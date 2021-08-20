import React from 'react';
import styled from 'styled-components';
import { media } from '../utilities';
import Container from '../layouts/Container';

export const Info = () => {
  return (
    <InfoWrapper>
      <div className='info-top-title'>
        <h2>what's on</h2>
      </div>
      <div className='info-background'>
        <Container className='info-container'>
          <div className='info-side-title'>
            <h2>what's on</h2>
          </div>
          <div className='info-image'>
            <div className='image-ratio-container'>
              <img alt='vivid-sydney' src={'./images/vivid-sydney.jpg'} />
            </div>
          </div>
          <div className='info-accordion'>
            <p>accordion</p>
          </div>
        </Container>
      </div>
    </InfoWrapper>
  );
};

export default Info;

const InfoWrapper = styled.section`
  .info-top-title {
    /* background: green; // ToDo */
    background: var(--blue-300);

    display: flex;
    align-items: center;

    height: 120px;
    padding: var(--baseSpace);

    ${media.md} {
      height: 130px;
    }

    ${media.lg} {
      background: transparent;
      height: 150px;
    }

    h2 {
      color: white;

      ${media.lg} {
        display: none;
      }
    }
  }

  .info-background {
    background: var(--blue-300);

    .info-container {
      max-height: 550px;
      padding-bottom: var(--baseSpace);

      ${media.md} {
        display: flex;
        justify-content: center;
      }

      ${media.lg} {
        padding-bottom: 0;
      }

      .info-side-title {
        /* background: blue; // ToDo */
        display: none;

        ${media.lg} {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 15%;
        }

        h2 {
          color: white;
          white-space: nowrap;
          transform: rotate(-90deg);
          padding-top: 50px;
        }
      }

      .info-image {
        /* background: aqua; // ToDo */

        width: 100%;

        /* keep 360 : 250 ratio of image */
        position: relative;
        padding-top: 69.44%;

        ${media.md} {
          width: 50%;
          padding-top: 0;
        }

        ${media.lg} {
          width: 35%;
        }

        .image-ratio-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          ${media.md} {
            position: static;
          }

          ${media.lg} {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;

            ${media.lg} {
              height: 110%;
            }
          }
        }
      }

      .info-accordion {
        /* background: yellow; // ToDo */

        width: 100%;

        ${media.md} {
          width: 50%;
        }
      }
    }
  }
`;

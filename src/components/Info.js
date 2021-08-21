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
              <img src={'./images/vivid-sydney.jpg'} alt='Vivid Sydney' />
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
  margin-bottom: 120px;

  ${media.md} {
    margin-bottom: 130px;
  }

  ${media.lg} {
    margin-bottom: 150px;
  }

  .info-top-title {
    background: var(--blue-300);

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
        width: 100%;

        ${media.md} {
          width: 55%;
        }

        ${media.lg} {
          width: 50%;
        }
      }
    }
  }
`;

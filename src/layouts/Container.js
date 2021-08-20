import styled from 'styled-components';
import { media } from '../utilities';

const Container = styled.div`
  width: 100%;
  padding: 0 var(--baseSpace);

  ${media.lg} {
    max-width: 960px;
    margin: 0 auto;
  }

  ${media.xl} {
    max-width: 1140px;
  }

  ${media.xxl} {
    max-width: 1320px;
  }
`;

export default Container;

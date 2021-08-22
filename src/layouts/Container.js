import styled from 'styled-components';
import { media } from '../utilities';

const Container = styled.div`
  width: 100%;
  padding: 0 var(--baseSpace);

  ${media.xl} {
    max-width: 1140px;
    margin: 0 auto;
  }

  ${media.xxl} {
    max-width: 1320px;
  }
`;

export default Container;

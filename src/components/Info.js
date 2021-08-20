import React from 'react';
import styled from 'styled-components';

export const Info = () => {
  return (
    <InfoWrapper>
      <p>info</p>
    </InfoWrapper>
  );
};

export default Info;

const InfoWrapper = styled.div`
  p {
    color: pink;
  }
`;

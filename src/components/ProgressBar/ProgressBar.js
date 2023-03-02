/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size} aria-valuenow={value}>
      <Container>
        <Progress size={size} value={value} />
      </Container>
    </Wrapper>
  );
};

const styleLookup = {
  small: {
    height: '8px'
  },
  medium: {
    height: '12px'
  },
  large: {
    height: '16px'
  }
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: ${p => p.size === 'large' && '4px'};
  border-radius: 8px;
`;

const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${p => p.value + '%'};
  height: ${p => styleLookup[p.size].height};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;

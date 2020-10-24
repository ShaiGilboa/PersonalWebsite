import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const Project : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='Project'>
      Project
    </Wrapper>
  )
}

export default Project;

const Wrapper = styled.div`

`;
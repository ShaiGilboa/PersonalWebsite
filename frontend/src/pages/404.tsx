import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const NotFound404 : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='NotFound404'>
      NotFound404
    </Wrapper>
  )
}

export default NotFound404;

const Wrapper = styled.div`

`;
import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const MessageForm : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='MessageForm'>
      MessageForm
    </Wrapper>
  )
}

export default MessageForm;

const Wrapper = styled.form`

`;
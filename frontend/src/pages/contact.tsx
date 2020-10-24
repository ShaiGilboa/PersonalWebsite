import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import MainLayout from '../layouts/main';
import MessageForm from '../components/contact/messageForm';

interface props {
  style?: React.CSSProperties,
  
};

const Contact : React.FC<PropsWithChildren<props>> = () => {

  return (
    <MainLayout>
      <Wrapper data-css='Contact'>
        Contact
        <MessageForm>
          
        </MessageForm>
      </Wrapper>
    </MainLayout>
  )
}

export default Contact;

const Wrapper = styled.div`

`;
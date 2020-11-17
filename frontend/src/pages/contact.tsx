import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import MainLayout from '../layouts/main';
import MessageForm from '../components/contact/messageForm';
import Navbar from '../components/general/navbar';
import Main from '../components/general/main';

interface props {
  style?: React.CSSProperties,
  
};

const Contact : React.FC<PropsWithChildren<props>> = () => {

  return (
    <MainLayout>
      <Navbar />
      <Main>
        <Wrapper data-css='Contact'>
          Contact
          <MessageForm>
            
          </MessageForm>
        </Wrapper>
      </Main>
    </MainLayout>
  )
}

export default Contact;

const Wrapper = styled.div`

`;
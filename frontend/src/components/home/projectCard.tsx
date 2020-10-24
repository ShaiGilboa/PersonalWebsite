import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const ProjectCard : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='ProjectCard'>
      ProjectCard
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.div`

`;
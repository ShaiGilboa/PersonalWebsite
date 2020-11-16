import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import Img, { FixedObject } from 'gatsby-image';
import { Link } from "gatsby"


interface props {
  style?: React.CSSProperties,
  slug : string,
  title : string,
  image1: FixedObject | FixedObject[] ,
  image2: FixedObject | FixedObject[] ,
};

const ProjectCard : React.FC<PropsWithChildren<props>> = ({ title, slug, image1, image2 }) => {

  return (
    <Wrapper data-css='ProjectCard'>
      <Link to={slug}>
        {title}
      </Link>
      <p>1</p>
      <Img fixed={image1}/>
      <p>2</p>
      <Img fixed={image2}/>
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.li`

`;
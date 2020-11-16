import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import Img, { FixedObject } from 'gatsby-image';
import { Link } from "gatsby"


interface props {
  style?: React.CSSProperties,
  slug : string,
  title : string,
  image: FixedObject | FixedObject[] ,
};

const ProjectCard : React.FC<PropsWithChildren<props>> = ({ title, slug, image }) => {

  return (
    <Wrapper data-css='ProjectCard'>
      <Link to={slug}>
        {title}
        <Img fixed={image}/>
      </Link>
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.li`

`;
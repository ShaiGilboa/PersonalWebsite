import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { Link } from "gatsby"


interface props {
  style?: React.CSSProperties,
  slug : string,
  title : string,
  image1: FixedObject | FixedObject[] ,
  image2: FluidObject | FluidObject[] ,
};

const ProjectCard : React.FC<PropsWithChildren<props>> = ({ title, slug, image1, image2 }) => {

  return (
    <Wrapper data-css='ProjectCard'>
      <Link to={slug}>
        {title}
      </Link>
      <p>1</p>
      {/* <Img fixed={image1}/> */}
      <p>2</p>
      <Img fluid={image2}
        // objectFit="cover"
        // objectPosition="50% 50%"
        alt="g"
      />
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.li`
  width: 200px;
`;
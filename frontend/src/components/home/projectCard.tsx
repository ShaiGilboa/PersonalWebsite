import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { Link } from "gatsby"
import { TechLink } from '../../types';


interface props {
  style?: React.CSSProperties,
  slug : string,
  title : string,
  image: FluidObject | FluidObject[] ,
  description: string,
  techs: TechLink[],
};

const ProjectCard : React.FC<PropsWithChildren<props>> = ({ title, slug, image, description, techs }) => {

  return (
    <Wrapper data-css='ProjectCard'>
      <Link to={slug}>
        {title}
        <Img fluid={image}
          // objectFit="cover"
          // objectPosition="50% 50%"
          alt="g"
        />
      </Link>
      <Techs>
        {techs.map((tech : TechLink) => <Tech>
          <a target="__blank" href={tech.link}>{tech.title}</a>
        </Tech>)}
      </Techs>
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.li`
  width: 200px;
`;

const Techs = styled.ul`

`;

const Tech = styled.li`

`;
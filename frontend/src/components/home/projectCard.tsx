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
      <Photo>
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
      </Photo>
      <Description>
        <p>{description}</p>
      </Description>
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.li`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  a {
    width: 20%;
  }
  
`;

const Photo = styled.div`
  flex: 1 1 40%;
`;

const Description = styled.div`
  flex: 2 2 60%;
`;

const Techs = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tech = styled.li`
  padding: 5px;
  a {
    width: fit-content;
  }
`;
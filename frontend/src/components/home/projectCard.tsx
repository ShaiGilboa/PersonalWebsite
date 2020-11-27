import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { Link, graphql } from "gatsby"
import { TechLink } from '../../types';
import { CurrentURL, MEDIA } from '../../utils/constants';
import { extractCorrectImageFromQuery } from '../../utils/functions';

interface props {
  style?: React.CSSProperties,
  slug : string,
  title : string,
  image: FluidObject | FluidObject[] ,
  description: string,
  techs: TechLink[],
  index: number,
};

const ProjectCard : React.FC<PropsWithChildren<props>> = ({ title, slug, image, description, techs, index }) => {

  return (
    <Wrapper data-css='ProjectCard' index={index}>
      <Photo>
        <Link to={slug}>
          <ImgContainer>
            <Img fluid={image}
              imgStyle={{ objectFit: 'contain' }}
              // objectPosition="50% 50%"
              alt="g"
            />
            <AppearCenterOnHover>
              <p>{title}</p>
            </AppearCenterOnHover>
          </ImgContainer>
        </Link>
          <Techs>
            {techs.map((tech : TechLink) => <Tech>
              <a target="__blank" href={tech.link}>
              {tech.logo ? 
                <Img 
                  fluid={tech.logo.asset.fluid}
                  alt={tech.title+' Img'}
                  imgStyle={{ objectFit: 'contain', 
                  height: "100%", width: '100%'
                }}
                />
                : tech.title
              }
              </a>
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

const Wrapper = styled.li<{index : number}>`
  position: relative;
  @media (min-width: ${MEDIA.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
      ${props => props.index % 2 === 0 ? '"photo description"' : '"description photo"'};
    padding: 20px;
    width: 100%;
    /* display: flex; */
    /* flex-direction: row; */
    a {
      width: 20%;
    }
  }
`;

const Photo = styled.div`
  /* flex: 1 1 40%; */
  grid-area: photo;
  /* max-height: 200px; */
  a {
    position: relative;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const AppearCenterOnHover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  justify-content: space-around;
  p {
      /* position: relative; */
      width: fit-content;
      margin: 0 auto;
      /* top: 50px; */
      z-index: 1;
    }
`;

const Description = styled.div`
  /* flex: 2 2 60%; */
  grid-area: description;
  text-align: center;
  text-justify: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p{
    height: fit-content;
  }
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
  width:50px;
  height:50px;
  a {
    width: fit-content;
  }
`;
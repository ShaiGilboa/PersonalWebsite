import React, { PropsWithChildren } from 'react';
import { Global, css } from "@emotion/core"

interface props {
  style?: React.CSSProperties,
  
};

const GlobalStyle = ({} : props) => { 
  return (
    <Global
      styles={css`
        ::-webkit-scrollbar{
          width: '12px';
          /* background-color: 'lightgray'; */
        }
        
        ::-webkit-scrollbar-thumb{
          border-radius: '3px';
          background-color: 'var(--background-color)';
          border: '2px solid var(--nav-color)';
        }
        
        ::-webkit-scrollbar-track{
          border-radius: '3px';
          background-color: 'transparent';
        }
        
        html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font: 'inherit';
          vertical-align: 'baseline';
          box-sizing: 'border-box';
          text-decoration: none;
          color: inherit;
        }
    
        article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{
          display: 'block';
        }
        
        input, textarea{
          box-shadow: 'inset 0 2px 4px 0px rgba(0,0,0,.19)';
          border: "1px solid transparent";
          -webkit-box-shadow: 'inset 0 2px 4px 0px rgba(0,0,0,.19)';
          -moz-box-shadow: 'inset 0 2px 4px 0px rgba(0,0,0,.19)';
          border-radius: '.25rem';
        }
        
        ol, ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}
    /> 
  ) 
}; 


export default GlobalStyle;
import styled from 'styled-components'
import {h} from 'preact'
import styleGuide from 'style.guide'

const patternBackground = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGklEQVQYlWO4d+/ef3TMgA0MBYWDzDkUKQQADFmz4yjA0qgAAAAASUVORK5CYII="

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  img{
    max-width: 650px;
    margin: 0 auto;
  }

  figure{
    border: solid ${styleGuide.borderColor} 1px;
    padding: 20px;
    background: url(${patternBackground});
  };

  h1{
    font-size: 0.9em;
    font-weight: normal;
    border: solid ${styleGuide.borderColor} 1px;
    background: ${styleGuide.contrast};
    border-top: none;
    border-radius: 0px 0px 5px 5px;
    padding: 10px;
  }
`

const Image = ({children, ...props}) => (
  <ImageWrapper>
    <figure>
      <img src={props.src} alt='image' />
    </figure>
    <h1> {props.src} </h1>
  </ImageWrapper>
)

export default Image

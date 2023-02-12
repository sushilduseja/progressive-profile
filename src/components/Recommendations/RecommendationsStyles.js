import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const RecommendationsContainer = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const RecommendationsTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '50px' : '40px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const RecommendationsCarousel = styled(Carousel)`
  width: 100%;
  max-width: 900px;
  .carousel .slide {
    background: transparent;
  }
  .carousel.carousel-slider .control-arrow {
    display: none;
  }
  .carousel .control-dots {
    position: relative;
    bottom: 0;
    margin: 0;
    width: 100%;
    padding: 16px;
    display: flex !important;
    justify-content: center;
    li {
      display: inline-block;
      margin-right: 8px;
      button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        transition: all 0.15s ease-in-out;
        &:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
        &.selected {
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
  
  @media ${props => props.theme.breakpoints.md} {
    max-width: 700px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    max-width: 500px;
  }
`;

export const RecommendationsSlide = styled.div`
  position: relative;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const RecommendationsCaption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 16px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    padding: 8px;
  }
`;

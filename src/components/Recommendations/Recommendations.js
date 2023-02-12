import React from 'react';

import {
  RecommendationsContainer,
  RecommendationsTitle,
  RecommendationsCarousel,
  RecommendationsSlide,
  RecommendationsCaption
} from './RecommendationsStyles';

const Recommendations = () => {
  return (
    <RecommendationsContainer id="recommendations">
      <RecommendationsTitle>Recommendations</RecommendationsTitle>
      <RecommendationsCarousel
        autoPlay
        interval={3000}
        transitionTime={1000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <RecommendationsSlide>
          <img src="/images/image1.jpg" alt="Image 1" />
        </RecommendationsSlide>
        <RecommendationsSlide>
          <img src="/images/image2.jpg" alt="Image 2" />
        </RecommendationsSlide>
        <RecommendationsSlide>
          <img src="/images/image3.jpg" alt="Image 3" />
        </RecommendationsSlide>
        <RecommendationsSlide>
          <img src="/images/image4.jpg" alt="Image 4" />
        </RecommendationsSlide>
      </RecommendationsCarousel>
    </RecommendationsContainer>
  );
};

export default Recommendations;

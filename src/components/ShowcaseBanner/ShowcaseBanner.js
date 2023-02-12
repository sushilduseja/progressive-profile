import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './ShowcaseBannerStyles';

const ShowcaseBanner = (props) => {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Vision <br /> 
          </SectionTitle>
          <SectionText>
            I believe that the intersection of technology and people is key to solving problems. This is why my vision is to combine the power of technology with human connection to create cutting-edge products that have a positive impact.
          </SectionText>
          <Button onClick={() => window.open("http://www.linkedin.com/in/sushilduseja", "_blank")}>Connect with me</Button>
        </LeftSection>
      </Section>
    </>
  );
};


export default ShowcaseBanner;
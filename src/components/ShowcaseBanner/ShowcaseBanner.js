import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './ShowcaseBannerStyles';

const ShowcaseBanner = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Portfolio <br /> 
        </SectionTitle>
        <SectionText>
          The aim is to exhibit the progression of my professional development.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default ShowcaseBanner;
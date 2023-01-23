import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxTitle, JoinText } from './CoursesStyles';

const data = [
  { org: 'Scrum.org', text: 'Professional Scrum Master (PSM I)'},
  { org: 'IBM', text: 'Building Cloud Native and Multicloud Applications', },
  { org: 'IBM', text: 'Blockchain Essentials', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Key Courses & Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.org}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
   
  </Section>
);

export default Accomplishments;

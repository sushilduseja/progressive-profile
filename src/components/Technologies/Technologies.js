import React from 'react';
import { DiCode, DiAptana, DiReact, DiCloud9, DiCodepen, DiDatabase, DiJenkins, DiGitBranch, DiUnitySmall, DiYii } from 'react-icons/di';
import { TbApi, TbPlugConnected } from 'react-icons/tb';
import { SiDatabricks } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technology Stack</SectionTitle>
    <SectionText>
      As a skilled developer, I have deep expertise in crafting robust and scalable back-end systems, coupled with a nuanced grasp of front-end technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAptana size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Server-side Technologies</ListTitle>
          <ListParagraph>
            Spring, Spring Boot, Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <TbApi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>API Development</ListTitle>
          <ListParagraph>
            REST, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Technologies</ListTitle>
          <ListParagraph>
            React, Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCloud9 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Amazon Web Services (AWS)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiDatabricks size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Formats</ListTitle>
          <ListParagraph>
            FIX, FpML, XML, JSON
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <TbPlugConnected size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Messaging Services</ListTitle>
          <ListParagraph>
            Kafka, Apache MQ
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            KX/KDB+, MongoDB, MySQL, PostgresSQL, SQL Server, Oracle
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJenkins size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Build Tools</ListTitle>
          <ListParagraph>
            Ant, Maven, Gradle, Jenkins CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGitBranch size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            GIT, SVN
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUnitySmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Test Automation Frameworks</ListTitle>
          <ListParagraph>
            JUnit, TestNG, Mockito, Selenium, Cucumber
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiYii size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            LMAX Disruptor, QuickFixJ, Azul
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    
  </Section>
);

export default Technologies;

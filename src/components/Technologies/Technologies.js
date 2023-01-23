import React from 'react';
import { DiCode, DiAptana, DiReact, DiCloud9, DiCodepen, DiDatabase, DiJenkins, DiGitBranch, DiUnitySmall, DiYii } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technology Stack</SectionTitle>
    <SectionText>
      I possess extensive expertise in back-end development, with a solid understanding and experience in front-end technologies as well.
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
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Spring, Spring Boot
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
            React, Next.js
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
          <DiCodepen size="3rem" />
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
            Ant, Maven, Jenkins CI/CD
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
          <ListTitle>Testing Tools</ListTitle>
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
            Node.js, FIX, JSON, REST
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    
  </Section>
);

export default Technologies;

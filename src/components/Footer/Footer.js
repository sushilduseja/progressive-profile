import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, NewSlogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList/>
      <SocialIconsContainer>
        <SocialContainer>
        <CompanyContainer>
          <NewSlogan>Uniting technology and human connection to build innovative solutions that make an impact!</NewSlogan>
        </CompanyContainer>
          <SocialIcons href="https://github.com/sushilduseja">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="http://www.linkedin.com/in/sushilduseja">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d7d7d7;
  padding: 1rem 2rem;
  width: 100%;
  bottom: 0;
`;

const TextContainer = styled.div``;

const Text = styled.p`
  font-size: 0.8rem;
  color: ;
  margin: 0;
`;

const Link = styled.a`
  font-size: 0.8rem;
  color: #141416;
  margin: 0 0.5rem;
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterContainer>
      <TextContainer>
        <Text>© 2024 Avidex Industries LLC</Text>
      </TextContainer>
      <TextContainer>
        <Link href="#">Privacy Policy</Link>
      </TextContainer>
    </FooterContainer>
  );
}

export default Footer;

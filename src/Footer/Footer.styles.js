import styled from 'styled-components';

import color from 'styles/colors';

export const FooterAttr = styled.footer`
  color: ${color.secondary};
  font-size: 1rem;
  text-align: center;
  margin: 2rem;
  @media (min-width: 1140px) {
    margin-block: 1rem;
  }
`;

export const FooterLink = styled.a`
  &:link,
  &:visited {
    color: ${color.tertiary};
    font-weight: 900;
    text-transform: uppercase;
    transition: all 0.2s;
  }
  &:hover,
  &:active {
    color: ${color.secondary};
  }
`;

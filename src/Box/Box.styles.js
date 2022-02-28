import styled from 'styled-components';
import color from 'styles/colors';

export const Background = styled.div`
  width: 90%;
  max-width: 54rem;
  background-color: ${color.primaryLight};
  border-radius: 1.5rem;
  text-align: center;
  margin: 5rem 0;
  padding: 5rem 2rem;
  position: relative;
  box-shadow: 0px 5px 110px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 810px) {
    padding: 5rem 4rem;
  }
`;

export const AviceNum = styled.span`
  color: ${color.tertiary};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;

export const Advice = styled.h1`
  font-size: clamp(2.4rem, 2vw, 2.8rem);
  line-height: 1.3;
  margin: 2rem 0;

  @media (min-width: 810px) {
    margin: 2rem 0 4rem 0;
  }
`;

export const DividerIcon = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  width: 1rem;
  background-color: ${color.tertiary};
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 50%;
  padding: 3rem;
  position: absolute;
  left: 50%;
  bottom: -3rem;
  aspect-ratio: 1;
  transform: translateX(-50%);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 50px ${color.tertiary};
    cursor: pointer;
  }

  &:active,
  &:focus-visible {
    outline: 0.1rem solid ${color.secondary};
    box-shadow: 0px 0px 50px ${color.tertiary},
      rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

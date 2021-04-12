import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacings.large};
    border-bottom: 2px solid rgb(35, 35, 35);
    backdrop-filter: blur(42px);
    width: 100%;

    nav {
      display: flex;
      align-items: center;
      max-width: 140rem;
      margin: 0 auto;
      width: 100%;
    }

    a {
      font-size: 3rem;
      color: ${theme.colors.yellow};
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`;

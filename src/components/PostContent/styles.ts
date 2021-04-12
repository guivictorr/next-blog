import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    pre {
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.dark};
      color: ${theme.colors.gray};
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.medium};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.yellow};
    }

    a {
      color: ${theme.colors.yellow};
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.8);
      }
    }

    img {
      max-width: 100%;
    }

    p {
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium} 0;
      font-size: ${theme.font.sizes.large};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium};
    }
  `}
`;

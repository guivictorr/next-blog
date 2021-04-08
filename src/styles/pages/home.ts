import styled, { css } from 'styled-components';

export const HomeStart = styled.section`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 50px;
  margin-top: 200px;

  figure {
    img {
      width: 100%;
      height: 520px;
      object-fit: cover;
    }
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.superLarge};

    b {
      color: ${theme.colors.yellow};
    }

    p:last-child {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
      width: 100%;
      max-width: 650px;
    }
  `}
`;

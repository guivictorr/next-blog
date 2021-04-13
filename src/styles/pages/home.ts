import styled, { css } from 'styled-components';

export const HomeStart = styled.section`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 50px;
  margin-top: 200px;
  height: 80vh;

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

    h1 {
      color: ${theme.colors.yellow};
      font-size: 6rem;
    }

    p:last-child {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
      width: 100%;
      max-width: 650px;
    }
  `}
`;

export const LastPosts = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    b {
      color: ${theme.colors.yellow};
      font-size: ${theme.font.sizes.superLarge};
    }

    ul {
      list-style: none;
      padding: 20px 0;
    }
  `}
`;

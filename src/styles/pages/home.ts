import styled, { css } from 'styled-components';

export const HomeStart = styled.section`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 50px;
  margin-top: 200px;
  height: 80vh;

  @media (max-width: 946px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }

  figure {
    width: 420px;
    height: 520px;

    @media (max-width: 946px) {
      width: 300px;
      height: 300px;

      img {
        border-radius: 50%;
      }
    }

    @media (max-width: 630px) {
      width: 200px;
      height: 200px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.superLarge};

    @media (max-width: 946px) {
      text-align: center;
    }

    @media (max-width: 640px) {
      font-size: ${theme.font.sizes.large};
    }

    h1 {
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

export const LastPosts = styled.section`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0 auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    b {
      color: ${theme.colors.yellow};
      font-size: ${theme.font.sizes.superLarge};
    }

    ul {
      list-style: none;
      width: 100%;
    }
  `}
`;

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

export const LastPosts = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: ${theme.colors.yellow};
      font-size: ${theme.font.sizes.superLarge};
    }

    ul {
      list-style: none;
      padding: 20px 0;

      li {
        width: 80rem;
        height: 220px;
        background: ${theme.colors.dark};
        color: ${theme.colors.white};
        border-radius: 6px;
        padding: 0 45px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        &:first-child {
          margin-top: 45px;
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        h1 {
          color: ${theme.colors.white};
        }

        p {
          color: ${theme.colors.gray};
          font-size: ${theme.font.sizes.medium};
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 5px;
        }
      }
    }
  `}
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};

    a {
      color: ${theme.colors.yellow};
    }
  `}
`;

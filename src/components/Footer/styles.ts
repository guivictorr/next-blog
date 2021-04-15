import styled, { css } from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};

    a {
      color: ${theme.colors.yellow};
    }
  `}
`;

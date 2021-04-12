import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    font-size: ${theme.font.sizes.superLarge};
    text-align: center;
    margin: ${theme.spacings.large} 0;
  `}
`;

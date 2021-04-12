import styled, { css } from 'styled-components';

export const Container = styled.i`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    margin: ${theme.spacings.large} 0;
  `}
`;

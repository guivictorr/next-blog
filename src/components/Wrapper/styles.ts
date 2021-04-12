import styled from 'styled-components';

type WrapperProps = {
  maxWidth: number;
};

const Wrapper = styled.div<WrapperProps>`
  max-width: ${({ maxWidth }) => maxWidth}rem;
  margin: 0 auto;
  padding: 0 60px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export default Wrapper;

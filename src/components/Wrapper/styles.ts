import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 60px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export default Wrapper;

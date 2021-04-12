import { ReactNode } from 'react';
import { Container } from './styles';

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};

export default Heading;

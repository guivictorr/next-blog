import Link from 'next/link';

import { Container } from './styles';

type HeaderProps = {
  home?: boolean;
};

const Header = ({ home }: HeaderProps) => {
  return (
    <Container>
      <nav>
        <Link href="/">
          <a>{home ? `👋 Guilherme Victor` : 'Voltar'}</a>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;

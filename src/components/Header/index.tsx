import Link from 'next/link';

import { SITE_NAME } from '../../config/appConfig';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <nav>
        <Link href="/">
          <a>👋 {SITE_NAME}</a>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;

import Link from 'next/link';
import * as S from './styles';

type IPostCard = {
  slug: string;
  title: string;
  description: string;
};

const PostCard = ({ slug, title, description }: IPostCard) => {
  return (
    <S.Container>
      <Link href={`/post/${slug}`}>
        <a>
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </Link>
    </S.Container>
  );
};

export default PostCard;

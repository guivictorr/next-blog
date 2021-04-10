import Link from 'next/link';
import * as S from './styles';

type IPostCard = {
  id: number;
  title: string;
  description: string;
};

const PostCard = ({ id, title, description }: IPostCard) => {
  return (
    <S.Container>
      <Link href={`/post/${id}`}>
        <a>
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </Link>
    </S.Container>
  );
};

export default PostCard;

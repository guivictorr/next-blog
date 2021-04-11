import Link from 'next/link';
import formatDate from '../../utils/formatDate';
import * as S from './styles';

type IPostCard = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
};

const PostCard = ({ id, title, description, createdAt }: IPostCard) => {
  return (
    <S.Container>
      <Link href={`/post/${id}`}>
        <a>
          <h1>{title}</h1>
          <p>{description}</p>
          <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        </a>
      </Link>
    </S.Container>
  );
};

export default PostCard;

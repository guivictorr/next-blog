import Link from 'next/link';
import Date from '../Date';
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
          <Date date={createdAt} />
        </a>
      </Link>
    </S.Container>
  );
};

export default PostCard;

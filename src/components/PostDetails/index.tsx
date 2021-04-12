import { Container } from './styles';
import { PostAuthor } from '../../@types/posts';
import Date from '../Date';

type PostDetailsProps = {
  author: PostAuthor;
  created_at: string;
};

const PostDetails = ({ author, created_at }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={created_at} /> por {author.name}
    </Container>
  );
};

export default PostDetails;

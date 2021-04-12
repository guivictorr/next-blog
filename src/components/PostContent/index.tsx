import { Container } from './styles';

type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostContent;

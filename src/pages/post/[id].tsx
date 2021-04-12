import { GetStaticPaths, GetStaticProps } from 'next';

import { PostData } from '../../@types/posts';

import * as S from '../../styles/pages/post';

import countAllPosts from '../../data/posts/countAllPosts';
import getAllPosts from '../../data/posts/getAllPosts';
import getPost from '../../data/posts/getPost';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Wrapper from '../../components/Wrapper/styles';
import PostDetails from '../../components/PostDetails';
import PostContent from '../../components/PostContent';
import Footer from '../../components/Footer';

const Post = ({ title, cover, content, created_at, author }: PostData) => {
  return (
    <main>
      <Header />
      <Wrapper maxWidth={100}>
        <S.Content>
          <Heading>{title}</Heading>
          <img src={cover[0].formats.medium.url} alt="Teste" />
          <PostDetails author={author} created_at={created_at} />
          <PostContent content={content} />
          <Footer />
        </S.Content>
      </Wrapper>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map(post => {
      return {
        params: {
          id: String(post.id),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const post = await getPost(ctx.params?.id);

  return {
    props: post,
  };
};

export default Post;

import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../@types/posts';
import countAllPosts from '../../data/posts/countAllPosts';
import getAllPosts from '../../data/posts/getAllPosts';
import getPost from '../../data/posts/getPost';

const Post = ({ title }: PostData) => {
  return <h1>{title}</h1>;
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

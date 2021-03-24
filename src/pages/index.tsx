import { GetStaticProps } from 'next';
import { PostData } from '../@types/posts';
import getAllPosts from '../data/posts/getAllPosts';

type HomeProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: HomeProps) => {
  return <h1>Hello World</h1>;
};

export default Home;

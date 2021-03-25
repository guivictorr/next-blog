import { GetStaticProps } from 'next';
import { PostData } from '../@types/posts';
import Header from '../components/Header';
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
  return <Header />;
};

export default Home;

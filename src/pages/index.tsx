import { GetStaticProps } from 'next';
import { PostData } from '../@types/posts';

type HomeProps = {
  posts: PostData[];
};

const getPosts = async (): Promise<PostData> => {
  const posts = await fetch('http://limitless-cove-88022.herokuapp.com/posts');
  const jsonPosts = posts.json();

  return jsonPosts;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

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

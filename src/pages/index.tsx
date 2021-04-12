import { GetStaticProps } from 'next';

import { PostData } from '../@types/posts';
import getAllPosts from '../data/posts/getAllPosts';

import * as S from '../styles/pages/home';

import Header from '../components/Header';
import Wrapper from '../components/Wrapper/styles';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';

type IHomeProps = {
  posts: PostData[];
};

const Home = ({ posts }: IHomeProps) => {
  return (
    <main>
      <Header home />
      <Wrapper maxWidth={140}>
        <S.HomeStart>
          <S.TextBox>
            <p>Olá, me chamo</p>
            <b>Guilherme Victor</b>
            <p>
              Sou um jovem curioso interessado por tecnologia e jogos, sempre
              estou atrás de aprender algo novo, sendo conhecido ou não. Hoje
              estudo desenvolvimento front end.
            </p>
          </S.TextBox>
          <figure>
            <img src="me.jpg" alt="Guilherme Victor" />
          </figure>
        </S.HomeStart>
        <S.LastPosts>
          <h1>Últimas publicações</h1>
          <ul>
            {posts.map(post => (
              <PostCard
                id={post.id}
                description={post.content}
                title={post.title}
                createdAt={post.created_at}
                key={post.id}
              />
            ))}
          </ul>
        </S.LastPosts>
        <Footer />
      </Wrapper>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=created_at:desc');

  return {
    props: {
      posts,
    },
  };
};

export default Home;

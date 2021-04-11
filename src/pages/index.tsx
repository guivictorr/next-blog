import { GetStaticProps } from 'next';

import { PostData } from '../@types/posts';
import * as S from '../styles/pages/home';
import getAllPosts from '../data/posts/getAllPosts';

import Header from '../components/Header';
import Wrapper from '../components/Wrapper/styles';
import PostCard from '../components/PostCard';

type IHomeProps = {
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

const Home = ({ posts }: IHomeProps) => {
  return (
    <main>
      <Header />
      <Wrapper>
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
        <S.Footer>
          <p>
            Feito com 💛 por{' '}
            <a href="https://github.com/guivictorr">Guilherme Victor</a>
          </p>
        </S.Footer>
      </Wrapper>
    </main>
  );
};

export default Home;

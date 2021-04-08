import { GetStaticProps } from 'next';

import { PostData } from '../@types/posts';
import * as S from '../styles/pages/Home';

import Header from '../components/Header';
import Wrapper from '../components/Wrapper/styles';
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
  return (
    <>
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
      </Wrapper>
    </>
  );
};

export default Home;

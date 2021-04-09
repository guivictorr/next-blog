import { GetStaticProps } from 'next';

import { PostData } from '../@types/posts';
import * as S from '../styles/pages/home';

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
            <li>
              <h1>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                augue erat, sollicitudin ac risus eu, bibendum dignissim enim.
                Nunc a rhoncus mi. Curabitur pellentesque orci non justo
                convallis, in tempor purus euismod. Aenean in dapibus velit.
                Donec vitae commodo nisl. Suspendisse vehicula mattis ante id
                aliquet. Fusce in ornare ligula. Mauris eget vehicula nulla,
                convallis rutrum mauris.
              </p>
            </li>
            <li>
              <h1>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                augue erat, sollicitudin ac risus eu, bibendum dignissim enim.
                Nunc a rhoncus mi. Curabitur pellentesque orci non justo
                convallis, in tempor purus euismod. Aenean in dapibus velit.
                Donec vitae commodo nisl. Suspendisse vehicula mattis ante id
                aliquet. Fusce in ornare ligula. Mauris eget vehicula nulla,
                convallis rutrum mauris.
              </p>
            </li>
            <li>
              <h1>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                augue erat, sollicitudin ac risus eu, bibendum dignissim enim.
                Nunc a rhoncus mi. Curabitur pellentesque orci non justo
                convallis, in tempor purus euismod. Aenean in dapibus velit.
                Donec vitae commodo nisl. Suspendisse vehicula mattis ante id
                aliquet. Fusce in ornare ligula. Mauris eget vehicula nulla,
                convallis rutrum
                mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.mauris.
              </p>
            </li>
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

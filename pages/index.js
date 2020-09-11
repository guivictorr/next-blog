import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá, me chamo Guilherme Victor e estou atualmente no último ano do ensino médio e pretendo cursar a área de tecnologia. comecei a estudar programação no final do ano passado, hoje estou estudando exclusivamente ReactJS, React Native e NodeJS em geral e sonho em trabalhar nessa área algum dia.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
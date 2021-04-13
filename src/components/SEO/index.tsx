import Head from 'next/head';
import removeHtml from '../../utils/removeHtml';

type SEOProps = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

const SEO = ({ title, description, imageUrl, url }: SEOProps) => {
  const descriptionSliced = removeHtml(description.slice(0, 150));

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

      <meta name="title" content={title} />
      <meta name="description" content={descriptionSliced} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://guilhermevictor.live${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descriptionSliced} />
      <meta property="og:image" content={imageUrl} />

      <meta property="twitter:card" content={imageUrl} />
      <meta
        property="twitter:url"
        content={`https://guilhermevictor.live${url}`}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={descriptionSliced} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default SEO;

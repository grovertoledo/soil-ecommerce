import Header from 'components/header';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Tierra fértil</title>
      <meta
        name='description'
        content='Tienda virtual de humus, lombrices y plantas'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
  </>
);
export default Home;

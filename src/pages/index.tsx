import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Hero />
    </Page>
  );
});

export default Home;

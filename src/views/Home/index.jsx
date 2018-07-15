import React from 'react';
import Grid from '../../components/Grid';
import data from '../../fake-data.json';

const Home = () => (
  <div>
    <Grid orgs={data.orgs} />
  </div>
);

export default Home;

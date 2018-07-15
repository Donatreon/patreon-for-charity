import React from 'react';
import Grid from '../../components/Grid';

const Home = ({ ctx: {orgs} }) => (
  <div>
    <Grid orgs={orgs} />
  </div>
);

export default Home;

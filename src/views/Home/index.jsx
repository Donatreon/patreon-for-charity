import React from 'react';
import Grid from '../../components/Grid';

const Home = ({ ctx: {orgs}, history, match }) => (
  <div>
    <Grid orgs={orgs} />
  </div>
);

export default Home;

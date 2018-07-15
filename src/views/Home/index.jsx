import React from 'react';
import Grid from '../../components/Grid';

const Home = ({ ctx }) => (
  <div>
    <Grid orgs={ctx.orgs} />
  </div>
);

export default Home;

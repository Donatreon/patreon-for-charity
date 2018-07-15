import React from 'react';
import Grid from '../../components/Grid';

const Home = ({ ctx: {orgs}, ...rest }) => (
  <div>
    <Grid orgs={orgs} {...rest} />
  </div>
);

export default Home;

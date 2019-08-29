import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
  <>
    <Helmet>
      <title>HOME PAGE</title>
    </Helmet>
    <div style={{background: 'orange'}}>
      This is a home page
    </div>
  </>
)

export default Home;
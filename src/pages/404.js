import React from 'react';
import { Helmet } from 'react-helmet';


const PageNotFound = () => (
  <>
    <Helmet>
      <title>404 Page Not Found</title>
    </Helmet>
    <span>
      <h1>404 Page Not Found</h1>
      <p>Sorry, this page is nonexistent.</p>
    </span>
  </>
);

export default PageNotFound;
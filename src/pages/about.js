import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout title="about this site" description="more info about this site">
      <h1>About this site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}

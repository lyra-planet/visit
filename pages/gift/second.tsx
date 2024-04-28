import React from 'react'
import Layout from '../../components/layout'
import GiftSecond from '../../components/Gift/GiftSecond';
const second = () => {
  return (
    <div className="space-y-10 w-full justify-center">

    <section className="w-full ">
    <GiftSecond/>
    </section>
    </div>
  );
};

second.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default second
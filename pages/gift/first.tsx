import React from 'react'
import Layout from '../../components/layout'
import GiftFirst from '../../components/Gift/GiftFirst';
const first = () => {
  return (
    <div className="space-y-10 w-full justify-center">

    <section className="w-full ">
    <GiftFirst/>
    </section>
    </div>
  );
};

first.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default first
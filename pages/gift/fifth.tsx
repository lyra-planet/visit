import React from 'react'
import Layout from '../../components/layout'
import GiftFifth from '../../components/Gift/GiftFifth';
const third = () => {
  return (
    <div className="space-y-10 w-full justify-center">

    <section className="w-full ">
    <GiftFifth/>
    </section>
    </div>
  );
};

third.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default third
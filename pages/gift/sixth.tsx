import React from 'react'
import Layout from '../../components/layout'
import GiftSixth from '../../components/Gift/GiftSixth';
const third = () => {
  return (
    <div className="space-y-10 w-full justify-center">

    <section className="w-full ">
    <GiftSixth/>
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
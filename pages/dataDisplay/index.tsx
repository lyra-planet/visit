import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import Display from '../../components/More/Display';

const index = () => {
  return (
    <div className="pt-8 space-y-10 w-full justify-center flex flex-col h-screen ">
      <section>
        <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif px-10">
          <p>梅心文游</p>
          <p className="w-2 h-2 bg-red-500"></p>
          <p>文旅数据</p>
        </h1>
      </section>
      <section className="flex flex-row w-full  flex-grow ">
      <Display/>
      </section>
    </div>
  );
};
index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default index
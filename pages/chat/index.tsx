import React from 'react'
import Layout from '../../components/layout'
import Loading from "../../components/Friend/Main/loading"
import Item from "../../components/Friend/Main/item";
import useAllFriend from "../../hooks/front/useAllFriend";
const index = () => {
  const friends = useAllFriend()
  return (
    <div className="py-8 px-10 space-y-10 w-full justify-center">
        <section>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>梅心文游</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>文旅探索</p>
            </h1>
        </section>
    <section className="w-full relative">
      <iframe className='w-full md:w-[70vw] h-[70vh]'  src="https://wx1.chatmee.cn/invite/F_ry0p6pEpv63gGUmB" frameBorder={0}></iframe>
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
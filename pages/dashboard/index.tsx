import React, { useState } from 'react'
import Layout from '../../components/DashBoard/layout'
import usePosts from '../../hooks/dash/usePosts'
import Item from '../../components/DashBoard/Manager/item'
import Link from 'next/link'
import { Spin } from '../../assets'
import { getRefreshTokenByToken } from '../../lib/token'
import { GetServerSideProps } from 'next/types'
const index = () => {
  const posts = usePosts()
  const [active,setActive] = useState(-1)
  console.log(posts)
  const Table = ({posts})=>{
    return (
      <section className='min-w-[55rem] '>

      <div className='p-1 border-b flex items-center bg-radial font-bold'>
      <p className='w-[10%] flex justify-center'>
      status
      </p>
      <p className='w-[10%]  flex justify-center'>count</p>
      <p className='w-[20%] flex justify-center'>title</p>
      <p className='w-[30%] flex justify-center'>tags</p>
      <p className='w-[30%] flex justify-center'>createdAt</p>
      </div>

  
  {
    posts[0]?
    posts?.map((post,index)=><Link href={`/dashboard/editor?id=${post.id}`} key={post.id} onClick={() => setActive(index)} >
      <Item post={post} active={active===index}/>
    </Link> ):<div className='w-full flex flex-row justify-center items-center'>
    <Spin className="w-10 h-10 animate-spin"/>Loading....
          
      </div>
  }
  </section>
    )
  }
  return (
    <section className='flex flex-col px-5 md:px-10 space-y-5 h-full w-full justify-center'>
        <div></div>
        <section className='h-[5%]'>
            <h1 className="flex items-center space-x-2 text-xl md:text-3xl font-bold font-serif">
            <p>梅心文游</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>文章管理</p>
            </h1>
        </section>
      <section className='h-[90%] relative w-full overflow-auto scrollbar-thumb-red-500 scrollbar-thin'>
      {posts?<Table posts={posts}/>:<div className='
      w-full flex justify-center items-center text-neutral-600 h-full bg-neutral-100
      relative overflow-hidden 
      before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran
      
      '>
      <Spin className="w-10 h-10 animate-spin"/>Loading....
        </div>}
      </section>
    </section>
  )
}
index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default index
export const getServerSideProps: GetServerSideProps = async ({req,res}) => {
  const refresh_token = req.cookies["refresh_token"]
  if(!refresh_token){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  const refreshToken = await getRefreshTokenByToken(refresh_token)
  if(! refreshToken){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return {props:{}}
}
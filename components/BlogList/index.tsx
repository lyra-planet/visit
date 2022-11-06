import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ArrowRight } from '../../assets'
import Item from './item'

const index = ({posts}) => {

  return (
    <div className='flex flex-col justify-center w-full items-center py-8 '>
      <ul className='grid

      sm:grid-cols-1
      xl:grid-cols-2
      2xl:grid-rows-3'>
      {
        posts.map(post=><Item key={post.id} post={post}/>)
      }
      </ul>
      <div className='pt-8'>
        <p className=' cursor-pointer bg-black text-white px-3 pt-1 py-2 hover:bg-red-500 hover:scale-105 transition duration-300'>
          往期存档
          <ArrowRight className="inline ml-1 w-4 text-white"/>
        </p>
      </div>
    </div>
  )
}

export default index
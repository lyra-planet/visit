
import Item from "./item"
import {
  ArchiveBoxIcon,
  CodeBracketIcon,
  SwatchIcon,
  BookmarkIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleLeftEllipsisIcon,
  TruckIcon
} from '@heroicons/react/24/outline'
import AuthLogin from '../Auth/Login'
import config from "../../config"
import { CreditCardOutlined, FireOutlined } from "@ant-design/icons"
const LeftSideBar = () => {
  return (
    <div className="flex flex-col space-y-8 h-full w-full pb-6
      animate-sildelefttoright bg-white justify-between
      ">
      <section className="flex flex-col space-y-8 w-full
      px-4 animate-sildelefttoright
      ">
        <section>
          <div>
          </div>
        </section>
        <section>
          <p className="
      text-red-500 text-sm
      transition font-bold
      duration-300
      lg:text-base
      xl:text-lg
      ">文旅文物</p>
          <ul>
            <Item link="/#bottom"><StarIcon className="h-5 mr-2" />主页<p className="hidden ml-2 lg:inline-block">Home</p></Item>
            <Item link="/about/#bottom"><StarIcon className="h-5 mr-2" />关于站点 <p className="hidden ml-2 lg:inline-block">AboutSite</p></Item>
            <Item link="/dataDisplay/#bottom"><CreditCardOutlined className="h-5 mr-2 text-lg" />文旅展示<p className="hidden ml-2 lg:inline-block">Display</p></Item>
            <Item link="/posts/#bottom"><ArchiveBoxIcon className="h-5 mr-2" />归档 <p className="hidden ml-2 lg:inline-block">Archive</p></Item>
            <Item link="/tags/#bottom">< BookmarkIcon className="h-5 mr-2" />标签集<p className="hidden ml-2 lg:inline-block">Tag</p></Item>
            <Item link="/lab/#bottom"><CodeBracketIcon className="h-5 mr-2" />数字馆藏 <p className="hidden ml-2 lg:inline-block">Collection</p></Item>
          </ul>
        </section>
        <section>
          <p className="
          text-red-500 text-sm
          transition font-bold
          duration-300
          lg:text-base
          xl:text-lg
      ">文旅互动</p>
          <ul>
            <Item link="/comments"><ChatBubbleLeftEllipsisIcon className="h-5 mr-2" />梅心留言板<p className="hidden ml-2 lg:inline-block">Message</p></Item>
            <Item link="/friends"><HeartIcon className="h-5 mr-2" />精选游客<p className="hidden ml-2 lg:inline-block">Tourists</p></Item>
            <Item link="/chat"><FireOutlined className="h-5 mr-2"/>文旅探索<p className="hidden ml-2 lg:inline-block">Explorer</p></Item>
            <Item link={config.links.friendLink}>< TruckIcon className="h-5 mr-2" />博物馆链接<p className="hidden ml-2 lg:inline-block">Traveling</p></Item>
          </ul>
        </section>
        
  
      </section>


      <AuthLogin/>
    </div>
  )
}

export default LeftSideBar


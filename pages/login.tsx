import { useRouter } from "next/router";
import Main from "../components/Tag/Main";
import Layout from "../components/layout";
import LeftSideBar from "../components/Tag/Main/leftSideBar";
import { useState } from "react";
import useAllTag from "../hooks/front/useAllTag";
import Loading from "../components/Tag/Main/loading";
import ArrowRight from "../assets/icon/arrowRight";
import Link from "next/link";
import Login from "../components/AuthLogin/Login";

const index = () => {
  const tags = useAllTag();
  const [active, setActive] = useState(0);
  const handlePosts = (index) => {
    setActive(index);
  };
  return (
    <div className="pt-8 pb-10 px-10 space-y-4 w-full flex flex-col h-full min-h-screen md:h-screen justify-center items-center bg-neutral-100 ">
      {/* 登录样式 */}
      <div className="font-serif flex flex-row w-2/3 h-2/3 border border-black shadow-xl bg-white">
        <section className="w-1/2  px-10 py-20">
          <div>
          <p className="text-3xl border-b border-black pb-0.5 inline-block">
             <span className="font-lyra font-bold text-red-500">登录</span> Login &nbsp;
          </p>
          
          <div>
            <Login/>
          </div>

          </div>
        </section>
        <section className="w-1/2 px-10 py-20 bg-radial border-l border-black">
          <div className=" w-full h-full text-2xl font-bold">
            <p className="border-b border-black pb-0.5">
              欢迎来到
              <span className="text-red-500 font-lyra text-3xl px-0.5">
                梅心文游
              </span>
              控制台
            </p>
            <div className="text-base py-2 text-neutral-500">
              梅心文游，顺应旅游浪潮，致力于
              <span className=" text-red-500 font-bold text-lg">
              文旅文物
                </span> 的展示与交流。实时发现热点地区，在
                <span className=" text-red-500 font-bold text-lg">可视化面板</span>3D展示
               ，平台会向群众推荐热点地区文物和<span className=" text-red-500 font-bold text-lg">人文美景</span>。用户可学习、浏览、评论相关文物和文化，仿佛亲临其境，感受
               <span className=" text-red-500 font-bold text-lg"> 历史文化</span>的魅力！
            </div>
            <Link
              href={`/posts`}
              className="
            inline-block
            relative  no-underline
            z-10 bg-black cursor-pointer group font-serif text-sm p-1
        text-white
            group/comment
            before:content-['']
            before:absolute
            before:w-0
            before:h-full
            before:left-0
            before:top-0
            before:z-0
          before:bg-red-500
            hover:before:w-20
            before:transition-all
            before:duration-300
            transition-all duration-150
            "
            >
              <span className="relative z-10 font-semibold whitespace-nowrap">
                了解更多
                <ArrowRight className="inline absolute w-3  m-0 scale-0 bottom-[0.1rem] z-10 text-white group-hover:scale-100  transition-all duration-150" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
index.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};

export default index;

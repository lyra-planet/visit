import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Header from "./Mobile/Header";
import Carousel from "./More/Carousel";
import {
  CompassOutlined,
  HeartOutlined,
  MessageOutlined,
  PictureOutlined,
  SendOutlined,
  StarOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const mainRef = useRef(null);
  useEffect(() => {
    mainRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const MainHeader = () => (
    <div className="border-b font-serif top-0 font-bold sticky    h-fit flex-row justify-between py-2 items-center z-50 bg-white hidden w-full md:flex bg-radial border-b-1 border-black">
      <div className="flex w-2/3 md:w-1/2 flex-row justify-around items-center  font-serif ">
        <div className=" text-red-500 text-nowrap font-bold text-lg">
          ❀梅心文游❀{" "}
        </div>
        <Link href={"/about/#bottom"}>
          <div className="text-nowrap hover:text-red-500 transition-all">
            <HeartOutlined className="pr-0.5" />
            关于网站
          </div>
        </Link>
        <Link href={"/dataDisplay/#bottom"}>
          <div className="text-nowrap hover:text-red-500 transition-all">
            <PictureOutlined className="pr-0.5" />
            数据大图
          </div>
        </Link>
        <Link href={"/lab/#bottom"}>
          <div className="text-nowrap hover:text-red-500 transition-all">
            <StarOutlined className="pr-0.5" />
            文物欣赏
          </div>
        </Link>
        <Link href={"/comments/#bottom"}>
          <div className="text-nowrap hover:text-red-500 transition-all">
            <MessageOutlined className="pr-0.5" />
            旅客留言
          </div>
        </Link>
      </div>
      <div className="flex w-1/5 flex-row justify-end items-center ">
        <div className=" cursor-pointer hover:text-red-500 transition-all duration-300 mr-5">
          <CompassOutlined className="pr-0.5" />
          搜索
        </div>
        <Link href={"/login"}>
        <div className="bg-red-500 px-4 py-2 text-white rounded-full text-center cursor-pointer hover:scale-110 transition-all hover:shadow-lg mr-5">
          <UserOutlined className="pr-0.5" />
          控制台
        </div>
        </Link>

      </div>
    </div>
  );
  const Card = (props) => (
    <Link
      className=" px-5 w-full md:w-1/3 cursor-pointer"
      href={props.link ? props.link : "/"}
    >
      <div className=" px-5 w-full cursor-pointer h-3/4">
        <img
          className="max-w-full object-cover max-h-96 rounded-lg shadow-sm  w-full h-full
        hover:shadow-xl hover:scale-110 hover:-translate-y-5
         transition-all duration-300
        "
          alt="Florence"
          loading="lazy"
          decoding="async"
          src={props.url}
        ></img>
        <div className="pt-5 font-bold text-xl flex flex-row justify-between pb-5 md:pb-0 ">
          <div>
            <span className="text-red-500 font-serif font-light text-base">
              目的地
              <SendOutlined className="px-1" />:
            </span>{" "}
            <span className="font-serif">{props.dis}</span>
          </div>
          <div>
            <span className="text-red-500 font-serif font-light text-base">
              收录文物
              <StarOutlined className="px-1" />:
            </span>{" "}
            <span className="font-serif">{props.count}件</span>
          </div>
        </div>
      </div>
    </Link>
  );
  return (
    <div className="flex h-screen flex-col bg-white relative">
      <Header />
      <div className="flex flex-col h-full overflow-auto scrollbar-none">
        <div className="relative flex  h-fit flex-col">
          <MainHeader />
          <div className="w-full h-fit flex ">
            <Carousel />
          </div>
          <div className="flex font-serif flex-col pt-16 px-12 border-y-[10px] border-red-500">
            <div className=" font-bold text-gray-500  text-xl">
            ⭐️来一场说走就走的旅行⭐️
            </div>
            <div className="text-4xl font-extrabold py-5">接下来去哪?🤔</div>
            <div className="flex flex-col md:flex-row justify-between w-full">
              <Card
                dis={"甘肃"}
                count={"10"}
                url={
                  "https://www.gswbj.gov.cn/uploadfile/20240423/1713833924978730.jpg"
                }
                link={"/posts/661e915f549b765797358228"}
              />
              <Card
                dis={"北京"}
                count={"10"}
                url={"https://img95.699pic.com/photo/50058/6818.jpg_wh860.jpg"}
                link={"/posts/662d0f7bad9a717b50a99a2c"}
              />
              <Card
                dis={"湖南"}
                count={"10"}
                url={
                  "https://ts1.cn.mm.bing.net/th/id/R-C.a2517581c3ba5806d45e5501e2e8ec21?rik=RqyoL3otH4vUVw&riu=http%3a%2f%2fimage.hnol.net%2fcs-img%2fattachment%2fforum%2f202005%2f18%2f110508c2y4goirjtbyhc2b.jpg&ehk=cx0VUrPFj1%2fV1qiY4orlOHw%2fGwoZjkRLVPxT18MAgoI%3d&risl=&pid=ImgRaw&r=0"
                }
                link={"/posts/662d0f7aad9a717b50a99a28"}
              />
            </div>
            <div className=" flex w-full justify-center py-10">
              <Link href={"/tags#bottom"}>
                <div
                  className="font-bold relative text-black overflow-hidden  text-xl border  p-5 rounded-full cursor-pointer
              z-10 
              flex flex-row flex-nowrap items-center
              bg-radial
              before:content-['']
              before:absolute
              before:w-0
              before:h-full
              before:left-0
              before:top-0
              before:z-0
              group/item
              before:rounded-full
            before:bg-red-500
              hover:before:w-full
              before:transition-all
              before:duration-300
              transition-all duration-150
              hover:text-white
              "
                >
                  <p className="z-10 relative">查看所有目的地</p>
                  <ArrowRightIcon className="z-10 relative group-hover/item:text-white w-0 group-hover/item:w-6 h-6 transition-all duration-150 " />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col p-16 px-12 bg-radial ">
            <div className="block tracking-widest text-gray-500 font-serif font-light text-base">
              感受文物
            </div>
            <div className="block tracking-widest text-red-500 font-serif font-bold text-3xl py-5">
              我与文物的故事
            </div>
            <Link href={"/posts/662d0f7bad9a717b50a99a2c"}>
              <div className="w-full relative h-fit flex flex-row justify-between hover:scale-[102%] transition-all hover:-translate-y-2 duration-150">
                <img
                  loading="lazy"
                  decoding="async"
                  className="max-w-full h-[30rem] object-cover w-full rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
                  src="https://s2.loli.net/2024/04/28/IbvEliJBeq31pmj.jpg"
                ></img>
                <div>
                  <div className="absolute top-0 left-0 w-1/2 h-full  md:h-1/2 text-white  flex flex-col justify-start items-start p-10 bg-black/50  rounded-tl-3xl md:rounded-br-3xl rounded-bl-3xl md:rounded-bl-0 cursor-pointer">
                    <div className=" text-3xl font-bold pb-5">
                      🎉 首都博物馆 & 国家博物馆大冒险 🎉
                    </div>
                    <div className="hidden font-bold md:block">
                      哦莫～首都博物馆的北京通史展厅刚刚升级改造完毕，真是让人超级期待！这次展览从周口店的“北京人”开始，直到现代的北京城，简直是一场跨越几十万年的时空之旅。🚀
                    </div>
                  </div>
                </div>
                <div className=" cursor-pointer hover:bg-black transition-all duration-300 top-4 right-4 absolute rounded-full bg-black/50 flex justify-center items-center w-10 h-10">
                  <TagOutlined className=" text-white text-2xl" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div id="bottom" className="flex min-h-full border-t">
          <section className="w-1/5 border-r hidden md:block">
            <LeftSideBar />
          </section>
          <section
            ref={mainRef}
            className="w-4/5 h-full flex flex-col flex-grow overflow-auto"
          >
            <div className="flex w-full   flex-row flex-grow">{children}</div>
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

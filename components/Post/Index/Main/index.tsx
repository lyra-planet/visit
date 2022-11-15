import Link from "next/link";
import useBlogList from "../../../../hooks/useBlogList";
import { distanceToNow, formatDate, formatDay } from '../../../../lib/dateRelative';
const index = ({ _posts }) => {
  const timeLine = useBlogList(_posts);
  return (
    <div className="py-8 px-10 space-y-10">
        <section>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>Lyra.Planet</p>
            <p className="w-1 h-1 bg-red-500"></p>
            <p>往期存档</p>
            </h1>
        </section>
    <section className="flex flex-col">
    {timeLine.length ? (
        timeLine.map(({ time, posts }) => (
          <section key={time} className="space-y-10">
            <section className="
            sticky top-0
            z-10
            text-2xl font-semibold flex items-center
            after:content-[''] after:border-b after:w-full after:absolute after:right-0 after:z-10
            w-full
            bg-white
            ">
                <div className="flex items-center relative z-20 pr-2 bg-white space-x-1">
                <p className=" text-red-500">{time}</p>
                <p className="w-1.5 h-1.5 bg-neutral-300"></p>
                <p className="text-neutral-400 font-normal text-xl"><span className="font-serif">{posts.length}</span>篇博客</p>
                </div>

            </section>
            <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 space-x-2  pb-10">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-row space-x-2 mb-10">
                <section >
                    <div className="font-serif font-bold bg-red-500 px-1  text-white">
                    156
                    </div>
                </section>
                <section className="border-b border-dotted flex flex-col justify-between pb-2 space-y-2">
                <Link href={`/posts/${encodeURIComponent(post.id)}`}>
                  <p className="text-base font-bold hover:text-red-500  transition duration-300 ">{post.title}</p>
                </Link>
                <div className="text-sm text-neutral-500" dangerouslySetInnerHTML={{ __html: post.excerpt[0] }} />
                <div className="text-gray-400 items-center text-sm flex space-x-2">
                <div className="flex flex-row ">
                 <ul className="flex flex-row space-x-2">
            {
              post.tags.map(tag=>(
              <li>
                <span className="text-red-500">
                #
                </span>
            <span className="transition duration-300 cursor-pointer hover:bg-red-500 hover:text-white px-0.5">
              <Link href={"/"}>{tag}</Link>
            </span>
              </li>
              ))
            }
                </ul>

                </div>
                <div className="w-1 h-1 bg-neutral-300"></div>
                <div className="font-serif">
                {formatDay(post.createdAt)}
                </div>
                </div>
                </section>
              </article>
            ))}
            </section>
          </section>
        ))
      ) : (
        <p>还没开始写博客捏:/</p>
      )}
    </section>


    </div>
  );
};

export default index;
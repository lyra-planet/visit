import React, { useEffect, useRef } from "react";
import Footer from "../../Footer";
import PostLeftSideBar from "../LeftSideBar";
import LeftSideBar from "../../LeftSideBar";
import TocHelper from "toc-helper";
import Header from "../Header";
import Comment from "../../Comment";
const index = ({post}) => {
  const contentRef = useRef(null);
  const tocRef = useRef(null);

  useEffect(() => {
    console.log(typeof window);
    if (typeof window === "object") {
      new TocHelper(tocRef.current, {
        scrollSelector: contentRef.current,
        contentSelector: contentRef.current,
        collapsedLevel: 3,
      });
    }
  }, [contentRef, tocRef]);
  return (
    <>
      <section className="w-2/7 hidden md:block overflow-auto scrollbar-none">
        <PostLeftSideBar>
          <LeftSideBar />
          <div ref={tocRef} className=" font-serif font-sm text-sm"/>
        </PostLeftSideBar>
      </section>
      <section className="w-full md:w-5/7 flex flex-col overflow-auto scrollbar-none">
        <div className="flex flex-col xl:flex-row px-2 md:px-6 flex-grow md:space-x-6">
          {/* article */}
          <section className="space-y-10 w-full xl:w-3/5 flex items-center flex-col">
            <Header post={post} />
            <main
              className="w-full prose break-words "
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </section>
          {/* comment */}
          <section className="xl:w-2/5 xl:border-l md:px-4">
            {post ? <Comment postId={post.id} /> : "Loading Comments"}
          </section>
        </div>
        <section>relative article</section>
        <section>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default index;

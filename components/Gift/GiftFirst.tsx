import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftFirst = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#first")[0] as HTMLCanvasElement, '/三星堆.glb', [0.1, 0.1, 0.1])
    }, [])
    return (
        <div className="flex flex-row w-full h-fit scrollbar-none">
            <div className="text-black bg-radial  w-1/2  box-border border-red-500 border-4">
                <section className='w-full flex flex-row justify-center  pt-10'>
                    <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
                        <p>梅心文游</p>
                        <p className="w-2 h-2 bg-red-500"></p>
                        <p>文物展示</p>
                    </h1>
                </section>
                <div className='w-full flex flex-col items-center justify-center pt-10'>
                    <div className="text-2xl inline-block w-fit bg-black text-white py-1 px-2 border-b-2 border-red-500">
                        戴金面罩青铜人头像
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        戴金面罩青铜人头像，整件人头像金光熠熠，气度非凡。在中国的考古发现中，四川广汉三星堆遗址是我国迄今发现的最早的大规模青铜人像遗址。其中最具代表性的器物就是戴金面罩青铜人头像，它以其特殊的造型以及独具特色的文化内涵驰名中外。
                        </p>
                        <p className=' indent-8'>
                        通过青铜人头像粘贴金面罩这一特点，可以说明当时的古蜀人已经视金为尊贵的象征。人头像作为常设于神庙中的祭祀神像，在其面部贴金，其目的绝非仅仅为了美观，而应是与祭祀内容和对象有关。从三星堆两个祭祀坑共出土了青铜人头像多达50多件，戴金面罩的铜人头像却只有4件来分析，它们应该是代表着特殊的身份和地位的。这种具有社会最高层地位的人，据推断他们是手握生杀大权，并具有与神交流的特殊技能的。值得注意的是，这类戴金面罩的人头像在商周时期中国其他地区和其他文化中几乎不可见，它应当是古蜀青铜文明特有的文化现象，它反映的是古蜀文明浓郁的地域特色。
                        </p>

                    </div>
                        <div className='w-full flex px-5'>
                            <Link
                                href={`/posts/662d0d37ad9a717b50a99a1e`}
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
            ">
                                <span className="relative z-10 font-semibold whitespace-nowrap">
                                    了解更多
                                    <ArrowRight className="inline absolute w-3  m-0 scale-0 bottom-[0.1rem] z-10 text-white group-hover:scale-100  transition-all duration-150" />
                                </span>
                            </Link>
                        </div>
                </div>

            </div>
            <div className="relative flex  w-full h-full justify-center items-center m-0  overflow-hidden" style={{ backgroundImage: "url(/background.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                <canvas className="w-[100vh] block  h-[100vh]" id="first"></canvas>
            </div>
        </div>
    )
}

export default GiftFirst
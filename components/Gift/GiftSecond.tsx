import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftSecond = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#second")[0] as HTMLCanvasElement, '/三年兴壶.glb', [1.4, 1.4, 1.4])
    }, [])
    return (
        <div className="flex flex-row w-full h-fit">
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
                    三年兴壶
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        三年兴壶是西周中期文物，该器形体庞大，造型庄重，纹饰古朴，是西周中期青铜壶器的典型作品。整器束颈垂腹，下承圈足，大圆顶盖，兽耳对称，双环贯耳。除盖顶饰团鸟纹，其腹、腰、颈用两条素带相隔，环饰曲波纹，宽疏有序，线条流畅。器盖、底圈足饰窃曲纹，形成对应。
                        </p>
                        <p className=' indent-8'>
                        1976年陕西省扶风县庄出土，通高65.42厘米，口径19.7厘米，腹深48.42厘米。盖榫外侧有铭文六十字，大意为：周王三年九日丁已丑日，周王在郑国举行飨礼，天子命虢叔传旨，给郑国赏赐祭祀礼器羔俎一个。（羔俎：为祭祀用来盛放三牲六畜之一，羊头的盘子） ，郑国为答谢天子之赐，铸造俎并在俎上记金文为祖考祭器，以记录天子的恩德。
                        </p>

                    </div>
                        <div className='w-full flex px-5'>
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

                <canvas className="w-[100vh] block  h-[100vh]" id="second"></canvas>
            </div>
        </div>
    )
}

export default GiftSecond
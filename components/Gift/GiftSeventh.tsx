import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftSeventh = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#seventh")[0] as HTMLCanvasElement, '/云纹青铜大烧.glb', [2, 2, 2],-4)
    }, [])
    return (
        <div className="flex flex-row w-full h-fit scrollbar-none">
            <div className="text-black bg-radial  w-1/2  box-border border-red-500 border-4">
                <section className='w-full flex flex-row justify-center pt-10'>
                    <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
                        <p>梅心文游</p>
                        <p className="w-2 h-2 bg-red-500"></p>
                        <p>文物展示</p>
                    </h1>
                </section>
                <div className='w-full flex flex-col items-center justify-center pt-10'>
                    <div className="text-2xl inline-block w-fit bg-black text-white py-1 px-2 border-b-2 border-red-500">
                    云纹青铜大铙
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        云纹青铜大铙通高77.8厘米，铣间56.6厘米，重100.35千克。西周。乐器。平口，钲部两侧有36个冏纹乳突状枚，枚直径3.5厘米，高2厘米。鼓饰变形兽面纹，两侧饰云雷纹。
                        </p>
                        <p className=' indent-8'>
                        甬亦饰变形兽面纹。大铙双范合铸，浑大厚重，作风稳重古朴。表现出很高的铸造工艺水平，是福建出土的最大的青铜器。1978年，建瓯县(今建瓯市)小桥公社阳泽大队黄科山出土。原通高76.8厘米，因柄与铙体被人为锯断再经焊接，通高多出1厘米。现藏福建省博物馆
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

                <canvas className="w-[100vh] block  h-[100vh]" id="seventh"></canvas>
            </div>
        </div>
    )
}

export default GiftSeventh
import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftSixth = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#sixth")[0] as HTMLCanvasElement, '/息铜鼎.glb', [5, 5, 5],0)
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
                    “息”铜鼎
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        “息”铜鼎，商代后期（公元前1300-前1046年），通高20.1厘米，口径16.2厘米，于1980年河南信阳罗山蟒张出土
                        </p>
                        <p className=' indent-8'>
                        鼎直口，宽沿，两耳立于口沿上，圆腹分裆，柱形足。颈部饰勾连云纹，腹部以三足为中心，饰三组云雷纹衬地的兽面纹。兽面两侧配置有倒夔纹。腹内壁铸有铭文“息”字。
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

                <canvas className="w-[100vh] block  h-[100vh]" id="sixth"></canvas>
            </div>
        </div>
    )
}

export default GiftSixth
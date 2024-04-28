import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftThird = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#third")[0] as HTMLCanvasElement, '/马踏飞燕.glb', [0.02, 0.02, 0.02],-2)
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
                    铜奔马
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        铜奔马，又名马踏飞燕、马超龙雀等，为东汉青铜器，国宝级文物，1969年10月出土于甘肃省武威市雷台汉墓，现藏于甘肃省博物馆，为甘肃省博物馆镇馆之宝。
                        </p>
                        <p className=' indent-8'>
                        铜奔马通高34.5厘米，长45厘米，宽13.1厘米，重7.3千克，造型矫健精美，作昂首嘶鸣，疾足奔驰状，显示了一种勇往直前的豪情壮志，是中华民族伟大气质的象征。 
                        </p>
                        <p className=' indent-8'>
                        奔马三足腾空、一足超掠飞鸟的瞬间，飞鸟回首惊顾，更增强奔马急速向前的动势，全身的着力点集注于超越飞鸟的一足之上，准确地掌握了力学的平衡原理，具有卓越的工艺技术水平。 
                        </p>
                        <p className=' indent-8'>
                        1983年被国家旅游局确定为中国旅游标志；1986年被国家文物局专家组鉴定为国宝级文物；2002年被国家文物局列入首批禁止出国（境）展览文物目录。
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

                <canvas className="w-[100vh] block  h-[100vh]" id="third"></canvas>
            </div>
        </div>
    )
}

export default GiftThird
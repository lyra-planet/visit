import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftFourth = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#fourth")[0] as HTMLCanvasElement, '/清明上河图.glb', [1, 1, 1],-1)
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
                    清明上河图
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        清明上河图，中国十大传世名画之一。为北宋风俗画，北宋画家张择端仅见的存世精品，属国宝级文物，现藏于北京故宫博物院。
                        </p>
                        <p className=' indent-8'>
                        清明上河图宽24.8厘米、长528.7厘米 [1]（一说528厘米 [15]），绢本设色。作品以长卷形式，采用散点透视构图法，生动记录了中国十二世纪北宋都城东京（又称汴京，今河南开封）的城市面貌和当时社会各阶层人民的生活状况，是北宋时期都城东京当年繁荣的见证，也是北宋城市经济情况的写照。 
                        </p>
                        <p className=' indent-8'>
                        这在中国乃至世界绘画史上都是独一无二的。在五米多长的画卷里，共绘制了数量庞大的各色人物，牛、骡、驴等牲畜，车、轿、大小船只，房屋、桥梁、城楼等各有特色，体现了宋代建筑的特征。具有很高的历史价值和艺术价值。
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

                <canvas className="w-[100vh] block  h-[100vh]" id="fourth"></canvas>
            </div>
        </div>
    )
}

export default GiftFourth
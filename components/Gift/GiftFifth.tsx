import React, { useEffect } from 'react'
import { load3d } from '../../lib/load3D'
import ArrowRight from '../../assets/icon/arrowRight'
import Link from 'next/link'
const GiftFifth = () => {
    useEffect(() => {
        load3d(document.querySelectorAll("#fifth")[0] as HTMLCanvasElement, '/四方羊尊.glb', [4, 4, 4],1)
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
                    四羊青铜方尊
                    </div>
                    <div className='px-5 py-5 font-lyra'>
                        <p className=' indent-8'>
                        商四羊青铜方尊是商代晚期青铜礼器，祭祀用品。1938年出土于湖南省宁乡县黄材镇月山铺转耳仑的山腰上（炭河里遗址），现收藏于中国国家博物馆。
                        </p>
                        <p className=' indent-8'>
                        商四羊青铜方尊是中国现存商代青铜方尊中最大的一件，其每边边长为52.4厘米，高58.3厘米，重量34.5千克，长颈，高圈足，颈部高耸，尊四角各塑一羊，肩部四角是4个卷角羊头，羊头与羊颈伸出于器外，羊身与羊腿附着于尊腹部及圈足上。同时，方尊肩饰高浮雕蛇身而有爪的龙纹，尊四面正中即两羊比邻处，各一双角龙首探出器表，从方尊每边右肩蜿蜒于前居的中间。
                        </p>
                        <p className=' indent-8'>
                        商四羊青铜方尊整个器物用块范法浇铸，一气呵成，巧夺天工，显示了高超的铸造水平，被史学界称为“臻于极致的青铜典范”，位列中国十大传世国宝之一。
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

                <canvas className="w-[100vh] block  h-[100vh]" id="fifth"></canvas>
            </div>
        </div>
    )
}

export default GiftFifth
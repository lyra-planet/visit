'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';


interface ImageProps {
    url: string;
}

const index = () => {
    const [active, setActive] = useState(false)
    const { pathname } = useRouter()
    useEffect(() => {
        setActive(false)
    }, [pathname])

    const Image = (props: ImageProps): JSX.Element => {
        return (<div className='h-full'>
            <img className='w-full object-cover shadow-lg h-screen
            hover:brightness-75 transition-all duration-300' src={props.url} />
        </div>)
    }
    return (
        <div className='relative w-full h-fit max-h-full'>
            <Carousel className='h-full max-h-full' autoplay>
                <Image url={"https://www.dpm.org.cn/Uploads/Picture/2023/07/30/s64c6545c202d1.jpg"} />
                <Image url={"https://www.dpm.org.cn/Uploads/Picture/2023/04/25/s6447396b4ab95.jpg"} />
                <Image url={"https://www.dpm.org.cn/Uploads/Picture/2024/02/29/s65dfe55d35dbc.jpg"} />
                <Image url={"https://www.hnmuseum.com/sites/default/files/mwd3.jpg"} />
            </Carousel >
            <div className='absolute h-full w-full top-0 left-0 text-5xl font-extrabold  flex justify-center font-lyra  items-center text-white flex-col'>
                <p className='p-2 font-serif'>
                    探索中国🇨🇳,
                </p>
                <p className='p-2 font-serif'>
                    寻找文物中的故事
                </p>
                <p className='p-2 pt-10 text-2xl md:text-4xl opacity-70 font-serif'> 池边新栽七株梅，欲到花时点检来。</p>
                <p className='p-2 text-2xl md:text-4xl opacity-70 font-serif'>莫怕长洲桃李嫉，今年好为使君开。</p>
            </div>
        </div >
    )
}

export default index
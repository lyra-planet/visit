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
                <Image url={"https://s2.loli.net/2024/04/28/M8msUe3zWKjAvoF.jpg"} />
                <Image url={"https://s2.loli.net/2024/04/28/JHuBnFqoPMlKXZI.jpg"} />
                <Image url={"https://s2.loli.net/2024/04/28/rKQt6npDMkWbNOw.jpg"} />
                <Image url={"https://s2.loli.net/2024/04/28/qc6mP4dvytwSFWo.png"} />
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
import React from 'react'

export default function Home() {
    return (
        <>
            <div className='relative'>
                <img src='./Images/banner.png' alt='banner' className='w-full' />
                {/* <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-[4px_4px_10px_0px_rgba(40, 0, 105, 0.88)] bg-[url('/public/Images/text-background.png')] bg-no-repeat bg-center bg-fixed bg-cover"> */}
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-[4px_4px_10px_0px_rgba(40, 0, 105, 0.88)]">
                    <span className="text-4xl leading-[50px]">TOGETHER WE ARE STRONGEER!TOGETHER WE CAN DO ANYTHING!</span>
                    {/* <img className='absolute top-0' src='./Images/text-background.png' alt='bgimage' /> */}
                </div>
            </div>

            <div className='container m-auto'>
                <div className='mt-[100px] flex'>
                    <img src='/Images/content1.png' alt='content1' />
                    <div className='bg-[#C5A9D7] h-570px w-full relative flex justify-center items-center'>
                        <img className='absolute top-0 bottom-0 h-full w-full' src='/Images/Background _element.png' alt='content01' />
                        <h1 className='text-white text-4xl'>Open your <br /> full potential</h1>
                    </div>
                </div>
                <div className='mt-[100px] flex'>
                    <div className='bg-[#C5A9D7] h-570px w-full relative flex justify-center items-center'>
                        <img className='absolute top-0 bottom-0 h-full w-full' src='/Images/Background _element.png' alt='content02' />
                        <h1 className='text-white text-4xl'>Awaken your <br /> goddess within</h1>
                    </div>
                    <img src='/Images/content2.png' alt='content2' />
                </div>
                <div className='mt-[100px] flex'>
                    <img src='/Images/content3.png' alt='content3' />
                    <div className='bg-[#C5A9D7] h-570px w-full relative flex justify-center items-center'>
                        <img className='absolute top-0 bottom-0 h-full w-full' src='/Images/Background _element.png' alt='content03' />
                        <h1 className='text-white text-4xl'>Create your own <br />life effortlessly</h1>
                    </div>
                </div>
                <div className='mt-[100px] flex'>
                    <div className='bg-[#C5A9D7] h-570px w-full relative flex justify-center items-center'>
                        <img className='absolute top-0 bottom-0 h-full w-full' src='/Images/Background _element.png' alt='content04' />
                        <h1 className='text-white text-4xl'>Have the support <br /> of other goddesses</h1>
                    </div>
                    <img src='/Images/content4.png' alt='content4' />
                </div>
            </div>
        </>
    )
}



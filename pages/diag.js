import Image from 'next/image'
import React from 'react'

const Diag = () => {
    return (
        <div className='h-screen w-full  p-4 bg-imageFour bg-cover bg-center bg-no-repeat flex justify-center flex-col items-center gap-4'>
            <div className=" w-full flex justify-center">
                <Image
                    src={"/logo.png"}
                    height={15}
                    width={300}
                    alt='The logo'
                />
            </div>

            <div className="h-4/5 w-4/5 flex flex-row gap-4">
                <div className="w-1/2 h-full bg-black/50 flex justify-center items-end hover:bg-black/100 cursor-pointer
                bg-imageSix bg-center bg-cover bg-no-repeat rounded-lg ">
                    {/* <h4 className='font-bold text-4xl text-white'>PLAYING OUT OF KENYA</h4> */}
                    {/* <h4 className='text-white font-bold animate-bounce'>UGANDA</h4> */}
                </div>
                <div className="w-1/2 h-full bg-black/50 flex justify-center items-end hover:bg-black/100 cursor-pointer
                bg-imageFive bg-center bg-cover bg-no-repeat">
                    {/* <h4 className='font-bold text-4xl text-white'>PLAYING OUT OF UGANDA</h4> */}
                    {/* <h4 className='text-white font-bold animate-bounce'>KENYA</h4> */}
                </div>
            </div>

        </div>
    )
}

export default Diag

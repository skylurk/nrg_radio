import React from 'react';
import Image from 'next/image';

const OptionThree = () => {

    return (
        <div className='flex flex-row relative bg-imageThree bg-cover bg-center bg-no-repeat'>
            <div className="h-screen w-1/2 bg-black/60"></div>
            <div className="h-screen w-1/2 "></div>
            <div className="flex flex-col justify-center items-center absolute h-[80vh] w-[35%] rounded-lg shadow-lg bg-black/30 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* <h3 className='text-4xl font-bold mb-16'>I ❤️ NRG.RADIO</h3> */}
                <Image
                    src={"/logo.png"}
                    width={500}
                    height={200}
                    alt='The logo'
                // className="sm:w-0 lg:w-10"
                />
                {/* <h4 className='text-lg font-bold mb-4'>NON-STOP HIT MUSIC</h4> */}
                <h5 className='text-4xl font-medium mb-8 mt-24'>SELECT A COUNTRY</h5>

                <button className='hover:bg-yellow-400 hover:border-2 hover:bg-transparent border-2 border-transparent hover:border-green-500 w-3/4 bg-[#DD0E34] py-4 mx-4 mb-2 rounded-lg shadow-lg text-2xl font-bold relative'>KENYA
                </button>
                <button className=' w-3/4 py-4 mx-4 rounded-lg shadow-lg text-2xl border-2 border-green-500 font-bold hover:bg-[#DD0E34] hover:border-transparent'>UGANDA</button>
            </div>


        </div>
    )
}

export default OptionThree
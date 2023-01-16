import React from 'react'

const OptionOne = () => {
  return (
    <div className='flex flex-row relative bg-image bg-cover bg-center bg-no-repeat'>
        <div className="h-screen w-1/2 bg-black/60"></div>
        <div className="h-screen w-1/2 "></div>
        
        <div className="flex flex-col justify-center items-center absolute h-[80vh] md:w-[35%]  w-[90%] rounded-lg 
        shadow-lg bg-black/0 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className='md:text-4xl text-2xl font-bold mb-16'>I ❤️ NRG.RADIO</h3>
            <h4 className='text-lg font-bold mb-4'>NON-STOP HIT MUSIC</h4>
            <h5 className='text-4xl font-extrabold mb-5'>SELECT A COUNTRY</h5>

            <button className='md:w-3/4 w-full bg-red-600 py-4 mx-4 mb-4 mt-10 rounded-lg shadow-lg font-bold text-2xl'>KENYA</button>
            <button className='md:w-3/4 w-full bg-red-600 py-4 mx-4 rounded-lg shadow-lg font-bold text-2xl'>UGANDA</button>
        </div>

        
    </div>
  )
}

export default OptionOne
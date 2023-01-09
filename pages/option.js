import React from 'react'

const OptionOne = () => {
  return (
    <div className='flex flex-row relative bg-image bg-cover bg-center bg-no-repeat'>
        <div className="h-screen w-1/2 bg-black/60"></div>
        <div className="h-screen w-1/2 "></div>
        <div className="flex flex-col justify-center items-center absolute h-[80vh] w-[35%] rounded-lg shadow-lg bg-black/60 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className='text-4xl font-bold mb-16'>I ❤️ NRG.RADIO</h3>
            <h4 className='text-lg font-bold mb-4'>NON-STOP HIT MUSIC</h4>
            <h5 className='text-4xl font-extrabold mb-5'>SELECT A COUNTRY</h5>

            <button className='w-3/4 bg-sky-800 py-4 mx-4 mb-2 rounded-lg shadow-lg'>KENYA</button>
            <button className='w-3/4 bg-sky-800 py-4 mx-4 rounded-lg shadow-lg'>UGANDA</button>
        </div>

        
    </div>
  )
}

export default OptionOne
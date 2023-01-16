import React from 'react'

const OptionTwo = () => {
    return (
        <div className='flex flex-row relative '>
            <div className="h-screen w-1/2 bg-imageOne bg-cover bg-center bg-no-repeat"></div>
            <div className="h-screen w-1/2 bg-imageTwo bg-black/50 bg-cover bg-center bg-no-repeat"></div>
            <div className="flex flex-col justify-center items-center absolute h-[80vh] w-[35%] rounded-lg shadow-lg bg-black/50 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className='text-4xl font-bold mb-5'>I ❤️ NRG.RADIO</h3>
                <h4 className='text-lg font-bold '>NON-STOP HIT MUSIC</h4>
                <h5 className='text-4xl font-extrabold mb-5'>SELECT A COUNTRY</h5>

                <button className='w-3/4 bg-sky-800 py-4 mx-4 mb-2 rounded-lg shadow-lg'>KENYA</button>
                <button className='w-3/4 bg-sky-800 py-4 mx-4 rounded-lg shadow-lg'>UGANDA</button>
            </div>


        </div>
    )
}

export default OptionTwo
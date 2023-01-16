import Image from 'next/image';
import React from 'react'

const Cursor = () => {

    const cursorMotion = () => {
        const cursor = document.querySelector('.cursorFollow');
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.pageY + 3) + "px; left: " + (e.pageX + 3) + "px;")
        })
    }

    return (
        <div className='h-screen w-full overflow-hidden bg-black cursor-defaultTwo flex flex-row relative bg-image bg-cover bg-center bg-no-repeat' onMouseMove={cursorMotion}>

            <div className="h-screen w-1/2 bg-black/60"></div>
            <div className="h-screen w-1/2 "></div>
            <div className="flex flex-col justify-between items-center absolute h-[80vh] md:w-[35%] w-[90%] rounded-lg shadow-lg bg-black/0 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" flex flex-col justify-center items-center">
                    {/* <h3 className='text-4xl font-bold mb-5'>I ❤️ NRG.RADIO</h3> */}
                    <Image
                        src={"/logo.png"}
                        width={400}
                        height={200}
                        alt='The logo'
                    // className="sm:w-0 lg:w-10"
                    />
                    {/* <h4 className='text-lg font-bold mb-4'>BEAT OF THE MOMENT</h4> */}
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <h5 className='md:text-4xl text-2xl font-extrabold mb-5'>SELECT A COUNTRY</h5>
                    <button className='md:w-3/4 w-full bg-red-600 text-2xl font-bold py-3 mx-4 mb-2 rounded-lg shadow-lg hover:cursor-defaultThree'>KENYA</button>
                    <button className='md:w-3/4 w-full bg-red-600 text-2xl font-bold py-3 mx-4 rounded-lg shadow-lg hover:cursor-defaultThree'>UGANDA</button>
                </div>
            </div>
            <div className="cursorFollow w-[10px] h-[10px] bg-[#DD0E34] rounded-full absolute
        duration-300 ease-out"></div>

        </div>
    )
}

export default Cursor
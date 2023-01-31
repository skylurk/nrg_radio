import Image from 'next/image'
import React from 'react'

const Diag = () => {

    const cursorMotion = () => {
        const cursor = document.querySelector('.cursorFollow');
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.pageY + 3) + "px; left: " + (e.pageX + 3) + "px;")
        })
    }

    return (
        <div onMouseMove={cursorMotion} className=' h-screen bg-red-500 bg-imageFour w-full  p-1 bg-cover bg-center bg-no-repeat flex justify-center flex-col items-center'>

            <div className="fixed top-10 z-10 w-60 ">
                <Image
                    src={"/logo.png"}
                    height={15}
                    width={300}
                    alt='The logo'
                />
            </div>

            <div className="h-screen w-full flex flex-col md:flex-row gap-1">
                <div
                 onClick={() => window.open('https://ug.nrg.radio', '_blank')}
                 className="md:w-1/2 w-full h-full bg-black/50 flex justify-center items-end hover:bg-black/100 cursor-pointer
                bg-imageSix bg-center bg-cover bg-no-repeat hover:scale-95 transition-all  ">

                </div>
                <div 
                 onClick={() => window.open('https://ke.nrg.radio', '_blank')}
                className="w-full md:w-1/2 h-full bg-black/50 flex justify-center items-end hover:bg-black/100 cursor-pointer
                bg-imageFive bg-center bg-cover bg-no-repeat  hover:scale-95 transition-all">
                </div>
            </div>
            <div className="cursorFollow w-[10px] h-[10px] bg-[#ffffff] rounded-full absolute
        duration-300 ease-out"></div>

        </div>
    )
}

export default Diag

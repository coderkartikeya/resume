import React from 'react'
import Image from 'next/image'

const Upper = () => {
  return (
    <div className='md:p-10 m-5  h-[95%] bg-slate-100 flex md:flex-row flex-col rounded md:rounded-es-[100px] md:rounded-es-[600px] md:rounded-se-[400px] justify-center items-center rounded-es-[190px] rounded-se-[100px] '>
        <div className='h-full w-1/2 flex  justify-center items-center flex-col  '>
            <h1 className='text-8xl font-bold'>Hi!</h1>
            <h1 className='text-7xl '>I am <span className='text-5xl '>Kartikeya</span></h1>          
            <h1 className='text-5xl'>Vats</h1>           

        </div>
        <div className='h-full md:w-1/2 w-full'>
            <Image src={'/pic2.jpg'} height={500} width={500} alt='pic' className=' h-full w-full rounded rounded-[100%] hover:opacity-[0.4] hover:bg-black '/>
        </div>

 
    </div>
  )
}

export default Upper
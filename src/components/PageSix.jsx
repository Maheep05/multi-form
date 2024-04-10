import math from '../assets/mathsimg.jpg';

export function PageSix() {
    return (
        <div>
            <div className='flex flex-col text-center justify-center items-center gap-4 h-screen'>
                <h1 className='text-3xl  font-semibold'>Learning paths based on your answers</h1>
                <h2 className='text-md font-medium text-gray-400'>Choose one to get started. You can switch anytime.</h2>
                <div className='flex flex-col md:flex-row justify-center gap-10 p-10 '>
                    <div className='flex border-2 flex-row items-center p-4 h-48 rounded-xl relative cursor-pointer'>
                        <p className='font-medium w-80'><b>Foundational Math</b> Build your foundational skills in algebra , geometry , and probability.</p>
                        <img src={math} alt="" className='h-36 w-36' />
                        <span className='border-2 border-[#f2b237] px-4 py-1 absolute rounded-full -top-4 right-48  bg-[#f2b237] font-semibold text-xs'>Most Popular</span>
                    </div>
                    <div className='flex border-2 cursor-pointer flex-row items-center rounded-xl h-48 p-4'>
                        <p className='font-medium w-80  '><b>Mathematical Thinking</b> Build your foundational skills in algebra , geometry ,and probability.</p>
                        <img src={math} alt="" className='h-36 w-36' />
                    </div>
                </div>
            </div>
        </div>
    )
}
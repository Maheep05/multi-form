import pully from '../assets/pully.jpg';
import { useNavigate } from 'react-router-dom';

export function PageThree({handleProgress}) {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('/4');
        handleProgress(3);
    }



    return (
        <div className=''>
            <div className='p-40 text-center md:p-20  flex flex-col gap-20 justify-center items-center'>
                <div className='flex flex-col  md:flex-row gap-32 items-center'>
                    <div>
                        <img src={pully} alt="" className='h-80 w-60' />
                    </div>
                    <div className='flex flex-col  gap-8  justify-center'>
                        <h1 className='font-bold text-3xl'>You are in the right place</h1>
                        <p className='text-lg px-4 md:px-0 w-[500px]'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
                    </div>
                </div>

                <button
                    className="px-10 rounded-lg text-md py-3 bg-black text-white "
                    onClick={handleContinue}
                >
                    Continue
                </button>
            </div>

        </div>
    )
}

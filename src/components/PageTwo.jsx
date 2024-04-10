import img from '../assets/face.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function PageTwo({handleProgress}) {
    const [selectedOption, setSelectedOption] = useState(false);
    const navigate = useNavigate();

    const handleOptionSelect = (option) => {
        setSelectedOption(option);

    };

    const handleContinue = () => {
        navigate('/3');
        handleProgress(2);
    }



    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className="flex justify-center p-10  text-center items-center flex-col gap-4">
                <span className="text-2xl font-bold">Which are you most intrested in?</span>
                <p className="text-gray-700 text-sm">Choose just one.This will help us get you started(but won't limit your experience) </p>
            </div>

            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'student' ? 'border-[#d6c15b] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('student')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Learning specific skills to advance my career</span>
                </div>
            </div>

            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'professional' ? 'border-[#d6c15b] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('professional')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Exploring new topics i'm intrested in</span>
                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'parent' ? 'border-[#d6c15b] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('parent')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Refreshing my Math Foundation</span>

                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'learner' ? 'border-[#d6c15b] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('learner')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Exercising my brain to stay sharp</span>
                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'teacher' ? 'border-[#d6c15b] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('teacher')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Something else</span>
                </div>
            </div>


            <button
                className={`px-10 rounded-lg text-md py-3 bg-black text-white ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                disabled={!selectedOption}
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    )
}
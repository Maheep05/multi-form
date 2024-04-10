import img from '../assets/face.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function PageOne({handleProgress}) {
    const [selectedOption, setSelectedOption] = useState(false);
    const navigate = useNavigate();

    const handleOptionSelect = (option) => {
        setSelectedOption(option);

      
    };

    const handleContinue = () => {
        navigate('/2');
        handleProgress(1);
    }



    return (
        <div className='flex flex-col justify-center items-center h-screen gap-4'>
            <div className="flex justify-center items-center flex-col gap-4">
                <span className="text-2xl font-bold">Which describes you best?</span>
                <p className="text-gray-700 text-sm">This will help us personalize your experience</p>
            </div>

            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'student' ? 'border-[#7c7036] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('student')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Student</span>
                    <span className='text-md text-gray-800'>or soon to be enrolled</span>
                </div>
            </div>

            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'professional' ? 'border-[#7c7036] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('professional')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Professional</span>
                    <span className='text-md text-gray-800'>pursuing a career</span>
                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'parent' ? 'border-[#7c7036] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('parent')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Parent</span>
                    <span className='text-md text-gray-800'>of a school age child</span>
                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'learner' ? 'border-[#7c7036] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('learner')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Lifelong Learner</span>
                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'teacher' ? 'border-[#7c7036] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('teacher')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Teacher</span>
                </div>
            </div>
            <div
                className={`flex gap-4 items-center border-2 border-gray-300 rounded-lg p-2 w-80 md:w-[800px] cursor-pointer ${selectedOption === 'other' ? 'border-[#7c7036] shadow-lg' : ''
                    }`}
                onClick={() => handleOptionSelect('other')}
            >
                <img src={img} alt="" />
                <div className='flex gap-1'>
                    <span className='text-md font-semibold'>Other</span>
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
import { Card } from "./Card";
import alg from '../assets/alg.jpg';
import alg2 from '../assets/alg2.jpg';
import arth from '../assets/arth.jpg';
import inte from '../assets/int.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PageFour({handleProgress}) {
    const [selectedOption, setSelectedOption] = useState(false);
    const navigate = useNavigate();

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleContinue = () => {
        if (selectedOption) {
            navigate('/5');
            handleProgress(4);
        }
    }

    const data = [{
        img: arth,
        title: "Arithmetic",
        desc: "Introductory"
    }, {
        img: alg,
        title: "Basic Algebra",
        desc: "Foundational"
    }, {
        img: alg2,
        title: "Intermediate Algebra",
        desc: "Intermediate"
    }, {
        img: inte,
        title: "Calculus",
        desc: "Advanced"
    }];

    return (
        <div className="flex flex-col gap-20 justify-center p-20 md:p-0 items-center">
            <div className="flex flex-col gap-4 justify-center text-center items-center">
                <h1 className='font-bold text-3xl'>What is your maths comfort level ?</h1>
                <h1 className='font-semibold text-xl text-gray-500'>Choose the highest levek you feel confident in - you can always adjust later.</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                {data.map((cdata, index) => (
                    <Card
                        key={index}
                        img={cdata.img}
                        title={cdata.title}
                        desc={cdata.desc}
                        handleOptionSelect={handleOptionSelect}
                        selected={selectedOption === cdata.title}
                    />
                ))}
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

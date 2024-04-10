
export function Card({img , title , desc , selected ,handleOptionSelect}){



    return (
        <div className={`flex justify-center items-center cursor-pointer flex-col gap-2 border-2  ${selected ? 'border-[#f4ecc4] shadow-lg' : 'border-gray-400'} w-60 rounded-xl p-4 `}  onClick={() => handleOptionSelect(title)}>
            <img src={img} alt="" className="h-20 w-36 md:h-24 md:w-40"/>
            <h1 className="text-lg font-semibold">{title}</h1>
            <h1 className="text-gray-400 text-xl font-semibold">{desc}</h1>
        </div>
    )
}
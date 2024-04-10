export function ProgressBar({ progress }) {
    return (
        <div>
            <div className=" pt-20 px-20">
                <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-[#0e8155] h-2 rounded-full" style={{ width: `${progress * 20}%` }}></div>
                </div>
            </div>
        </div>
    );
}

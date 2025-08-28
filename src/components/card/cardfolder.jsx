import React from "react";
import { ArrowUpRight } from "lucide-react";

const Cardfolder = ({ image }) => {
    return (
        <div className="relative w-64 h-80 bg-gray-700 text-white rounded-xl shadow-lg overflow-hidden border border-gray-600 flex flex-col">
            <div className="w-full bg-gray-600 p-3 text-lg font-semibold rounded-t-xl">
                Sample Project
            </div>
            <div className="flex-1 flex items-center justify-center p-4 bg-gray-500 rounded-b-xl relative">
                <img src={image} alt="Sample Project" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-700 rounded-tl-3xl flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-600 transition">
                <ArrowUpRight size={24} />
            </div>
        </div>
    );
};
export default Cardfolder;

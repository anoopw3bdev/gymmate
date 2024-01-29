"use client"

import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick';

const Drawer = ({ title, onClose, children }) => {
    const ref = useDetectOutsideClick(onClose);

    return (
        <div 
            className="hs-overlay fixed top-0 end-0 h-full w-1/3 z-[80] bg-white shadow-2xl border-s" 
            ref={ref}
        >
            <div className="flex justify-between items-center pt-7 pb-4 px-4 border-b">
                <h3 className="font-bold text-gray-800">
                    {title}
                </h3>
                <button
                    type="button"
                    className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={onClose}
                >
                    <span className="sr-only">Close modal</span>
                    Close
                </button>
            </div>

            <div className="p-4">
                {children}
            </div>
        </div>
    );
};

export default Drawer;

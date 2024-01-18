"use client"

import { useRef, useEffect } from 'react';
import Icons from '../../../public/assets/icons';

const Drawer = ({ isOpen, title, onClose, children }) => {
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log("insideee")
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div>
        {isOpen && (
            <div className="hs-overlay hs-overlay-open:translate-x-0 translate-x-0 fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s " tabIndex="1">
            <div className="flex justify-between items-center py-3 px-4 border-b">
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
        )}
        </div>
    );
};

export default Drawer;

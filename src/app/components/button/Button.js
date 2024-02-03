import React from 'react'

const Button = ({
    name,
    icon,
    onClick={}
}) => {
  return (
    <button 
        type="button" 
        className="py-3 px-4 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 gap-x-0"
        onClick={onClick}
    >
        {icon}&nbsp;
        {name}
    </button>
  )
}

export default Button

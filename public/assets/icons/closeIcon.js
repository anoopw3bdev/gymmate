const CloseIcon = ({
    height = 24,
    width = 24,
}) => {
  return (
    <svg 
        className="flex-shrink-0 w-4 h-4" 
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 6 6 18"/>
        <path d="m6 6 12 12"/>
    </svg>
  )
}

export default CloseIcon;
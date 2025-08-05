export default function TooltipButton({ tooltip, children, onClick, className = "" }) {
    return (
        <div className="relative group">
        <button
            onClick={onClick}
            className={`w-10 h-10 flex items-center justify-center rounded-md
                        hover:bg-black/10 dark:hover:bg-white/10
                        transition ${className}`}
        >
            {children}
        </button>
        {/* 툴팁 */}
        <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 
                    text-sm text-black dark:text-white bg-gray-300 dark:bg-gray-800 bg-opacity-80 rounded 
                    opacity-0 group-hover:opacity-100 pointer-events-none 
                    transition-all whitespace-nowrap z-10 "
        >
            {tooltip}
        </div>
        </div>
    );
}

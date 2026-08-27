interface ToggleButtonProps {
    text: string
    toggled: boolean
    onValueChange?: (toggled: boolean) => void
}

export default function ToggleButton({
    text,
    toggled,
    onValueChange,
}: ToggleButtonProps) {
    const handleClick = () => {
        onValueChange?.(!toggled)
    }

    return (
        <button onClick={handleClick} className={`h-full w-full border ${toggled ? "border-blue-500 text-blue-500" : "border-slate-500 text-slate-300"}`}>
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="font-bold text-[min(1.5vh,1.5vw,1rem)]">
                    {text}
                </h1>
            </div>
        </button>
    )
}
const Button = (props) => {

    const {label,iconURL,bgColor,border,textColor} = props ;

    return (
        <button className={`px-7 py-4 flex flex-row justify-center items-center gap-2 lg:gap-4 rounded-full 
            ${bgColor ? `${bgColor} ${textColor} ${border ? `border ${border}` : ""}` : "bg-coral-red text-white"}`}>
            {label}
            {iconURL && <img src={iconURL} alt="arrowIcon" />}
        </button>
    )
} 

export default Button ;
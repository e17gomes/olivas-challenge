import buttonT from "@/types/typeButton"
import { FC } from "react"

const Button: FC<buttonT> = ({ children, className, ...props }) => {
    return (
        <button className={`${className}  w-52 h-12 py-3 px-8 bg-Ybutton text-white font-extrabold rounded-full hover:bg-Ybutton/90 ease-in-out`} {...props}>
            {children}
        </button>
    )
}


const ButtonInverse: FC<buttonT> = ({ children, className, ...props }) => {
    return (
        <button className={`${className}`} {...props}>
            {children}
        </button>
    )
}


export { Button, ButtonInverse }



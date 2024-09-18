import buttonT from "@/types/typeButton"
import { FC } from "react"

const Button: FC<buttonT> = ({ children, className, ...props }) => {
    return (
        <button className={`${className} text-lg w-fit py-3 px-16 bg-Ybutton text-white font-extrabold rounded-full hover:bg-Ybutton/90 ease-in-out`} {...props}>
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



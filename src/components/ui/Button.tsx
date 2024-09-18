import buttonT from "@/types/typeButton"
import { FC } from "react"

const Button: FC<buttonT> = ({ children, className, ...props }) => {
    return (
        <button className={`${className} text-lg w-fit py-3 px-16 bg-Ybutton text-white font-extrabold rounded-full hover:bg-circle_session ease-in-out duration-300`} {...props}>
            {children}
        </button>
    )
}


const ButtonInverse: FC<buttonT> = ({ children, className, ...props }) => {
    return (
        <button className={`${className} text-lg w-fit py-3 px-16 border-2 mt-4 border-Ybutton text-Ybutton font-extrabold rounded-full hover:bg-Ybutton hover:text-white ease-in-out duration-300`} {...props}>
            {children}
        </button>
    )
}


export { Button, ButtonInverse }



import buttonT from "@/types/typeButton"
import { FC } from "react"

const Button: FC<buttonT> = ({ children, className, ...props }) => {
    return (
        <button className={`${className}`} {...props}>
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



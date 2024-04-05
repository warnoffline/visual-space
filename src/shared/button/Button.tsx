import './Button.scss'
type ButtonProps = {
    children: React.ReactNode,
    className?: string
}

const Button = ({children, className}: ButtonProps) => {
    return(
        <button className={className || "button__base"}>
            {children}
        </button>
    )
}

export default Button;
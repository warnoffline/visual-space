import './Button.scss'
type ButtonProps = {
    children: React.ReactNode,
    className?: string;
    onClick?: () => void;
    fz?: number
}

const Button = ({children, className, onClick, fz=32}: ButtonProps) => {
    return(
        <button className={className || "button__base"} onClick={onClick ? onClick : () => {}} style={{fontSize: `${fz}px`}}>
            {children}
        </button>
    )
}

export default Button;
import "./Button.css";

const Button = ({ size = 'medium', variant = 'contained', color = 'neutral', children, ...others }) => {
  return (
    <button className={`${size} ${variant} ${color}`}{...others}>
      {children}
    </button >
  )
}

export default Button
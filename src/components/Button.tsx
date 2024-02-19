import { ComponentPropsWithoutRef } from "react"

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'Sign Up';
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button
      {...props}
      className={`px-6 py-2 rounded cursor-pointer text-white 
      ${variant && 'bg-red-600'}
      `}
    />
  )
}

export default Button
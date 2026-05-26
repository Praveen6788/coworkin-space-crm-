import React from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"

const sizes = {
  sm: "h-10 px-4 text-sm rounded-lg",
  md: "h-12 px-6 text-base rounded-xl",
  lg: "h-14 px-8 text-lg rounded-2xl",
}

const colors = {
  primary: "bg-violet-600 hover:bg-violet-700 text-white",
  secondary: "bg-white text-black hover:bg-gray-200",
  success: "bg-green-500 hover:bg-green-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
}

const GlassButton = ({
  children,
  size = "md",
  color = "primary",
  glass = false,
  className,
  icon,
  iconPosition = "right",
  to,
  ...props
}) => {

  const baseClasses = clsx(
    "inline-flex items-center justify-center",
    "font-medium transition-all duration-300",
    "hover:scale-[1.02] active:scale-[0.98]",
    "shadow-lg",
    sizes[size],

    glass
      ? [
          "backdrop-blur-xl",
          "bg-white/10",
          "border border-white/20",
          "text-white",
          "hover:bg-white/20",
        ]
      : colors[color],

    className
  )

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </>
  )

  // Link Button
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    )
  }

  // Normal Button
  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  )
}

export default GlassButton
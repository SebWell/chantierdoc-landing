import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const floatingBackgroundVariants = cva(
  "absolute rounded-full blur-3xl animate-float",
  {
    variants: {
      size: {
        sm: "w-40 h-40 blur-2xl",
        md: "w-60 h-60 blur-2xl", 
        lg: "w-80 h-80 blur-3xl",
        xl: "w-96 h-96 blur-3xl",
      },
      color: {
        emerald: "bg-gradient-to-br from-emerald-500/30 to-green-100/40",
        emeraldLight: "bg-gradient-to-br from-emerald-500/40 to-emerald-400/30",
        emeraldDark: "bg-gradient-to-br from-emerald-300/40 to-green-100/50",
        emeraldSubtle: "bg-gradient-to-br from-emerald-500/20 to-emerald-200/30",
        blue: "bg-gradient-to-br from-blue-400/30 to-blue-600/40",
        purple: "bg-gradient-to-br from-purple-400/30 to-purple-600/40",
        pink: "bg-gradient-to-br from-pink-400/30 to-pink-600/40",
      },
      position: {
        topRight: "-top-40 -right-40",
        topLeft: "-top-40 -left-40", 
        bottomRight: "-bottom-40 -right-40",
        bottomLeft: "-bottom-40 -left-40",
        centerRight: "top-1/2 -right-40 transform -translate-y-1/2",
        centerLeft: "top-1/2 -left-40 transform -translate-y-1/2",
        topCenter: "-top-40 left-1/2 transform -translate-x-1/2",
        bottomCenter: "-bottom-40 left-1/2 transform -translate-x-1/2",
        quarterTopLeft: "top-1/4 left-1/4",
        quarterBottomRight: "bottom-1/4 right-1/4",
      }
    },
    defaultVariants: {
      size: "lg",
      color: "emerald",
      position: "topRight",
    },
  }
)

export interface FloatingBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof floatingBackgroundVariants> {
  animationDelay?: string
}

const FloatingBackground = React.forwardRef<HTMLDivElement, FloatingBackgroundProps>(
  ({ 
    className, 
    size, 
    color, 
    position, 
    animationDelay,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(floatingBackgroundVariants({ size, color, position, className }))}
        style={animationDelay ? { animationDelay } : undefined}
        ref={ref}
        {...props}
      />
    )
  }
)

FloatingBackground.displayName = "FloatingBackground"

export { FloatingBackground, floatingBackgroundVariants }
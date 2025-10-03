import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const animatedContainerVariants = cva(
  "",
  {
    variants: {
      animation: {
        none: "",
        float: "animate-float",
        fadeInUp: "animate-fade-in-up",
        pulse: "animate-pulse",
        spin: "animate-spin",
        bounce: "animate-bounce",
      },
      duration: {
        fast: "duration-300",
        normal: "duration-500", 
        slow: "duration-700",
        slower: "duration-1000",
      },
      delay: {
        none: "",
        100: "delay-100",
        200: "delay-200", 
        300: "delay-300",
        500: "delay-500",
        700: "delay-700",
        1000: "delay-1000",
      }
    },
    defaultVariants: {
      animation: "none",
      duration: "normal",
      delay: "none",
    },
  }
)

export interface AnimatedContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animatedContainerVariants> {
  asChild?: boolean
  animationDelay?: string
}

const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    className, 
    animation, 
    duration, 
    delay, 
    animationDelay,
    children,
    asChild = false,
    ...props 
  }, ref) => {
    const Comp = asChild ? React.Fragment : "div"
    
    const containerProps = asChild ? {} : {
      className: cn(animatedContainerVariants({ animation, duration, delay, className })),
      style: animationDelay ? { animationDelay } : undefined,
      ref,
      ...props
    }

    if (asChild) {
      return (
        <>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                className: cn(
                  animatedContainerVariants({ animation, duration, delay }),
                  child.props.className,
                  className
                ),
                style: {
                  ...child.props.style,
                  ...(animationDelay ? { animationDelay } : {})
                },
              })
            }
            return child
          })}
        </>
      )
    }

    return (
      <Comp {...containerProps}>
        {children}
      </Comp>
    )
  }
)

AnimatedContainer.displayName = "AnimatedContainer"

export { AnimatedContainer, animatedContainerVariants }
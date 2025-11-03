import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import GlareHover from "./glare-hover/GlareHover";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg gap-2 cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white hover:bg-primary/80 dark:hover:bg-primary/80 focus:ring-4 focus:ring-primary/50 dark:focus:ring-primary/50",
                outline:
                    "border border-primary text-primary hover:bg-primary/10 focus:ring-4 focus:ring-gray-200",
                accent: "bg-accent text-black hover:bg-accent/80 dark:hover:bg-accent/80 focus:ring-4 focus:ring-accent/50 dark:focus:ring-accent/50",
                light: "bg-white text-primary hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-white dark:hover:bg-gray-100",
            },
            size: {
                sm: "px-3 py-1.5 text-sm",
                md: "px-6 py-2 text-lg",
                lg: "px-8 py-4 text-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & { fill?: boolean };

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    onClick,
    children,
    variant,
    size,
    className,
    fill = false,
}) => {
    return (
        <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className={`rounded-lg inline-block ${fill && "w-full"}`}
        >
            <button
                onClick={onClick}
                className={cn(buttonVariants({ variant, size }), className)}
            >
                {children}
            </button>
        </GlareHover>
    );
};

export default Button;

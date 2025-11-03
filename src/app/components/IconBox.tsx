import { LucideIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

interface IconBoxProps {
    Icon?: LucideIcon;
    iconSrc?: string;
    className?: string;
}

const IconBox = ({ Icon, iconSrc, className }: IconBoxProps) => {
    return (
        <div
            className={`bg-gradient-to-br from-primary-800 to-primary-500 rounded-3xl ${
                iconSrc ? "p-1" : "p-4"
            } ${className}`}
        >
            {iconSrc ? (
                <Image
                    src={iconSrc}
                    alt="Service icon"
                    width={56}
                    height={56}
                    className="brightness-0 invert w-20 h-20 object-contain"
                />
            ) : Icon ? (
                <Icon
                    size={40}
                    className="text-white"
                />
            ) : null}
        </div>
    );
};

export default IconBox;

import { LucideIcon, LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

const IconBox = ({
    Icon,
    className,
}: {
    Icon: LucideIcon;
    className?: string;
}) => {
    return (
        <div
            className={`p-4 bg-gradient-to-br from-primary-800 to-primary-500 rounded-3xl ${className}`}
        >
            <Icon
                size={40}
                className="text-white"
            />
        </div>
    );
};

export default IconBox;

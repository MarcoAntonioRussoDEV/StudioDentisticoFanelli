import React from "react";
import Image from "next/image";

export interface DifferencesProps {
    before: string;
    after: string;
}

const Differences = ({ before, after }: DifferencesProps) => {
    return (
        <figure
            className="diff aspect-16/9"
            tabIndex={0}
        >
            <div
                className="diff-item-1"
                role="img"
                tabIndex={0}
            >
                <Image
                    width={100}
                    height={100}
                    alt="Caso prima del trattamento - Studio Dentistico Fanelli Foggia"
                    src={before}
                />
            </div>
            <div
                className="diff-item-2"
                role="img"
            >
                <Image
                    width={100}
                    height={100}
                    alt="Caso dopo il trattamento - Studio Dentistico Fanelli Foggia"
                    src={after}
                />
            </div>
            <div className="diff-resizer"></div>
        </figure>
    );
};

export default Differences;

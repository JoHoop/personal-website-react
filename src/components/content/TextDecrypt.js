import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
    chars: [
        "0",
        "1"
    ],
    interval: 18,
};

export const TextDecrypt = (props) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <p>
            {result}
            {" "}
        </p>
    );
};

import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["musician", "developer", "student"];

export const TextDecrypt = () => {
    const { result, dencrypt } = useDencrypt();

    React.useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 4000);

        return () => clearInterval(action);
    }, [dencrypt]);

    return <>a {result}</>;
};

import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["musician", "developer", "student"];

const decryptOptions = {
    chars: `a b c d e f g h i j k l m n o p q r s t u v w x y z ! @ # $ % & ( ) 
          { [ ] } < > ? 0 1 2 3 4 5 6 7 8 9`
        .replace("\n", "")
        .split(" "),
    interval: 70,
};

export const TextDecrypt = () => {
    const { result, dencrypt } = useDencrypt(decryptOptions);

    React.useEffect(() => {
        let i = 0;

        const updateText = () => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;

            setTimeout(updateText, 4000);
        };

        const action = setTimeout(updateText, 1000);

        return () => clearTimeout(action);
    }, [dencrypt]);

    return <>a {result}</>;
};

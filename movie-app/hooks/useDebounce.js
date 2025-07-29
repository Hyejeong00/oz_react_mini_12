import { useEffect, useState } from "react";

export default function useDebounce(input, delay) {
    const [debounced, setDebounced] = useState(input);

    useEffect(() => {
        const handler = setTimeout(() => {
        setDebounced(input);
        }, delay);

        return () => {
        clearTimeout(handler);
        };
    }, [input, delay]);

    return debounced;
}

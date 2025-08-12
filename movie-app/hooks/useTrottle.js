import { useEffect } from 'react';
import { throttle } from 'lodash'; // 라이브러리

export default function useThrottle(callback, delay = 500) {
    useEffect(() => {
        const throttled = throttle(() => {
        const scrollY = window.scrollY;
        const visible = window.innerHeight;
        const pageHeight = document.body.offsetHeight;

        if (scrollY + visible >= pageHeight - 200) {
            callback();
        }
        }, delay);

        window.addEventListener('scroll', throttled);
        return () => {
        window.removeEventListener('scroll', throttled);
        throttled.cancel(); // 메모리 누수 방지
        };
    }, [callback, delay]);
}

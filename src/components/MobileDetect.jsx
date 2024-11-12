import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

export default useWindowWidth;

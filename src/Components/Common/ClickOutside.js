const { useEffect } = require('react');

const useClickOutside = (ref, effect) => useEffect(() => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            effect();
        }
    };
    document.addEventListener('click', handleClickOutside, false);
    return () => {
        document.removeEventListener('click', handleClickOutside, false);
    };
}, [ref]);

export default useClickOutside;

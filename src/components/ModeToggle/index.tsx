import { useEffect, useState } from 'react';
import DarkModeIcon from '../DarkModeIcon';
import LightModeIcon from '../LightModeIcon';

const ModeToggle = () => {
    const darkModeSystem = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    const [mode, setMode] = useState('');

    const handleToggle = () => {
        const currentMode = mode === 'dark' ? 'light' : 'dark';

        document.documentElement.classList.toggle('dark');
        setMode(currentMode);
    };

    useEffect(() => {
        if (darkModeSystem) {
            document.documentElement.classList.add('dark');
            setMode('dark');
        } else {
            setMode('light');
        }
    }, []);

    return (
        <div className="flex items-center absolute left-6 bottom-6">
            <DarkModeIcon isActive={mode === 'dark'} />

            <label className="cursor-pointer mx-3">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    onChange={handleToggle}
                    defaultChecked={!darkModeSystem}
                />

                <span className="flex items-center px-1.5 bg-[#5a6069] w-12 h-6 rounded-full after:content-[''] after:block after:bg-white after:w-3 after:h-3 after:rounded-full peer-checked:after:translate-x-[200%] after:transition-transform" />
            </label>

            <LightModeIcon isActive={mode === 'light'} />
        </div>
    );
};

export default ModeToggle;

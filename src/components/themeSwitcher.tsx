"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        // <div className="flex">
        //     <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className="border p-2 rounded-md">{theme == 'light' ? <FiMoon /> :  <FiSun /> }</button>
        // </div>
        <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>{theme == 'light' ? <Moon className="size-4" /> :  <Sun className="size-4" /> }</button>
    );
}

export default ThemeSwitcher;
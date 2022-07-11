import { ArrowCircleLeftIcon, SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function RightBar() {
    const router = useRouter();
    return (

        <div className='fixed z-50 top-[108px] right-[64px] flex'>
            <div className='flex flex-col gap-4'>
                {
                    router.asPath !== '/' &&
                    <div
                        className='bg-white text-gray-light-liz hover:text-blue-liz dark:bg-gray-dark-liz dark:text-white-liz dark:hover:text-yellow-liz w-16 h-12 shadow-md rounded-xl flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'
                        onClick={() => { window.history.go(-1); return false; }}
                    >
                        <ArrowCircleLeftIcon className='h-6' />
                    </div>
                }
                <DarkModeButton />
            </div>

        </div>
    );
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const DarkModeButton = () => {
    const [dark, setDark] = useState(false);

    const didRunLERef = useRef(false);
    useIsomorphicLayoutEffect(() => {
        if (didRunLERef.current === false) {
            didRunLERef.current = true;
            if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    setDark(true);
                } else {
                    setDark(false);
                }
            }
        }
    }, []);


    const isDarkMode = () => {
        if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                return true;
            } else {
                return false;
            }
        }
    }

    const toggleDarkMode = () => {
        if (isDarkMode()) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDark(true);
        }
    }

    return (
        <div
            className='bg-white text-gray-light-liz hover:text-blue-liz dark:bg-gray-dark-liz dark:text-white-liz dark:hover:text-yellow-liz w-16 h-12 shadow-md rounded-xl flex items-center justify-center cursor-pointer'
            onClick={toggleDarkMode}
        >
            {
                dark ? <MoonIcon className='h-6' /> : <SunIcon className='h-6' />
            }

        </div>
    );
}
import { HomeIcon, ArrowCircleLeftIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function LeftBar() {
    const router = useRouter();

    return (
        <div className='fixed z-50 top-[108px] left-[64px]'>
            <div className='flex flex-col items-center justify-evenly w-16 py-8 shadow-md rounded-xl 
                bg-white dark:bg-gray-dark-liz'
            >
                {
                    router.asPath !== '/' && <LeftBarIcon Icon={ArrowCircleLeftIcon} onClick={() => {window.history.go(-1); return false;}} />
                }
                <LeftBarIcon Icon={HomeIcon} onClick={() => router.push('/')} />
                <LeftBarIcon Icon={DotsHorizontalIcon} />
            </div>
        </div>
    );
}

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
type LeftBarIconProps = {
    Icon: HeroIcon;
    onClick?: () => void;
}

const LeftBarIcon = ({ Icon, onClick }: LeftBarIconProps) => {
    return (
        <div className='w-14 h-14 flex items-center justify-center cursor-pointer
                text-gray-light-liz hover:text-blue-liz dark:text-white-liz dark:hover:text-yellow-liz'
            onClick={onClick}
        >
            <Icon className='h-6' />
        </div>
    );
}
import { Props } from '../types';

const CustomBlockquote = ({ children }: Props) => {
    return (
        <blockquote className="bg-light-gray dark:bg-gray p-6 rounded-md mb-5 font-normal relative before:content-[''] before:block before:w-1 before:h-full before:bg-orange before:absolute before:top-0 before:left-0 before:rounded-l-sm [&>p]:font-medium [&>p]:text-dark-gray dark:[&>p]:text-white [&>p]:mb-0 transition-[background]">
            {children}
        </blockquote>
    );
};

export default CustomBlockquote;

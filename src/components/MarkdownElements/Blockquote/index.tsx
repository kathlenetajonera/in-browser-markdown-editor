import { Props } from '../types';

const CustomBlockquote = ({ children }: Props) => {
    return (
        <blockquote className="bg-gray p-6 rounded-md my-5 text-white font-normal relative before:content-[''] before:block before:w-1 before:h-full before:bg-orange before:absolute before:top-0 before:left-0 before:rounded-l-sm [&>p]:font-medium [&>p]:text-white">
            {children}
        </blockquote>
    );
};

export default CustomBlockquote;

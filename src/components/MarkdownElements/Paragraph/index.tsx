import { Props } from '../types';

const CustomParagraph = ({ children }: Props) => {
    return (
        <p className="text-gray-text dark:text-lighter-gray text-sm font-light mb-5 [&>code]:text-dark-gray dark:[&>code]:text-white">
            {children}
        </p>
    );
};

export default CustomParagraph;

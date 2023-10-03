import { Props } from '../types';

const CustomParagraph = ({ children }: Props) => {
    return (
        <p className="text-lighter-gray text-sm font-light mb-5 [&>code]:text-white">
            {children}
        </p>
    );
};

export default CustomParagraph;

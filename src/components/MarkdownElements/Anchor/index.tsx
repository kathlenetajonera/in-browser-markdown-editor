import { Props } from '../types';

const CustomAnchor = ({ children, ...props }: Props) => {
    return (
        <a {...props} target="_blank" className="text-white underline">
            {children}
        </a>
    );
};

export default CustomAnchor;

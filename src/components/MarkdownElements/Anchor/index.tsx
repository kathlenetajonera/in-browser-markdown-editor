import { Props } from '../types';

const CustomAnchor = ({ children, ...props }: Props) => {
    return (
        <a
            {...props}
            target="_blank"
            className="text-dark-gray dark:text-white underline"
        >
            {children}
        </a>
    );
};

export default CustomAnchor;

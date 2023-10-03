import { Props } from '../types';

const CustomPreformatted = ({ children }: Props) => {
    return (
        <pre className="bg-gray p-6 rounded-md text-sm mt-5 whitespace-pre-wrap leading-6">
            {children}
        </pre>
    );
};

export default CustomPreformatted;

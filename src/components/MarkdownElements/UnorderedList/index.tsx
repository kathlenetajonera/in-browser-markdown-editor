import { Props } from '../types';

const UnorderedList = ({ children }: Props) => {
    return (
        <ul className="list-disc marker:text-orange pl-10 text-lighter-gray text-sm mb-5">
            {children}
        </ul>
    );
};

export default UnorderedList;

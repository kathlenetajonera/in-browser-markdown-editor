import { Props } from '../types';

const OrderedList = ({ children }: Props) => {
    return (
        <ol className="list-decimal pl-10 text-lighter-gray text-sm mb-5">
            {children}
        </ol>
    );
};

export default OrderedList;
import { Props } from '../types';

const CustomH1 = ({ children }: Props) => {
    return <h1 className="text-[2rem] font-bold mb-4">{children}</h1>;
};

export default CustomH1;

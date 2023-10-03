import { Props } from '../types';

const ListItem = ({ children }: Props) => {
    return <li className="pl-2.5 mb-1.5 font-light">{children}</li>;
};

export default ListItem;

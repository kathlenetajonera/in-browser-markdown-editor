import { useContext } from 'react';
import { AppContext } from '../../App';
import { Data } from '../../types';
import DocumentItem from '../DocumentItem';

const DocumentList = () => {
    const { documentList } = useContext(AppContext);

    return (
        <div className="mt-6">
            {documentList.map(({ id, createdAt, name }: Data) => (
                <DocumentItem
                    key={id}
                    id={id}
                    createdAt={createdAt}
                    name={name}
                />
            ))}
        </div>
    );
};

export default DocumentList;

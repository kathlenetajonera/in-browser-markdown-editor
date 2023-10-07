import { useContext } from 'react';
import { AppContext } from '../../App';
import icon from '../../assets/icons/icon-document.svg';

const InputField = () => {
    const { draftState, setDraftState } = useContext(AppContext);

    const handleChange = (e: any) => {
        const { value } = e.target;
        const updatedDraft = {
            ...draftState,
            name: value,
        };

        setDraftState(updatedDraft);
    };

    return (
        <div className="flex items-center ml-5 mr-2">
            <img src={icon} alt="save" className="mr-3" />
            <div>
                {draftState ? (
                    <>
                        <p className="hidden md:block text-gray-text text-[0.813rem] leading-[1]">
                            Document Name
                        </p>
                        <input
                            type="text"
                            placeholder="untitled.md"
                            className="font-roboto bg-transparent outline-none w-full text-white border-b-[1px] border-b-transparent transition-[border] focus:border-b-white md:w-[17.5rem]"
                            value={draftState.name || ''}
                            onChange={handleChange}
                        />
                    </>
                ) : (
                    <p className="font-roboto text-white cursor-not-allowed">
                        No selected document
                    </p>
                )}
            </div>
        </div>
    );
};

export default InputField;

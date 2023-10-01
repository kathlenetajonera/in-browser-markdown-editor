import logo from '../../assets/icons/logo.svg';

const Logo = () => {
    return (
        <span className="hidden lg:flex h-full items-center ml-5 pr-5 border-r-[1px] border-r-gray-text">
            <img src={logo} alt="Markdown" className="" />
        </span>
    );
};

export default Logo;

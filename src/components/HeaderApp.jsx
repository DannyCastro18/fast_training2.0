import Logo from './Logo';
import { SearchBar } from './SearchBar';

function HeaderApp() {
    return (
        <header className="flex w-screen gap-8 items-center pl-20 fixed top-0 h-[10vh]">
            <Logo />
            <SearchBar />
        </header>
    )
}

export default HeaderApp;
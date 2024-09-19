import Logo from './Logo';
import { SearchBar } from './SearchBar';

export default function HeaderApp() {
    return (
        <header className="flex w-screen gap-8 items-center pl-20 fixed top-0 h-fit">
            <section className='pt-8 flex justify-between w-full'>
                <Logo />
                <SearchBar />
            </section>
        </header>
    )
}

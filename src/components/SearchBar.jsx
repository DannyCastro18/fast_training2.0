function SearchBar() {
    return (
        <div className="flex items-center h-10 bg-zinc-100 rounded-md overflow-hidden">
            <input type="search" placeholder="Buscar" className="h-10 pl-8 w-[500px] bg-zinc-100" />
            <SearchIcon className="absolute left-2.5 top-2.5 text-muted-foreground text-black " />
        </div>
    )
};

function SearchIcon() {
    return (
        <svg className='text-slate-600 h-8 px-2 hover:bg-zinc-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg>
    )
}

export { SearchBar };
function IconAlert() {
    return (
        <div className="flex flex-col items-center">
            <svg className="h-48 w-748" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#f06c00" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5M11 7h2v6h-2m0 2h2v2h-2"/>
            </svg>
        </div>
    );
}

function Mensaje() {
    return <h2 className="font-bold text-4xl mt-8">Acceso restringido</h2>;
}

function Botones() {
    return (
        <div className="flex space-x-4 mt-12 justify-center">
            <button className="bg-amber-600 text-white px-4 py-2 rounded">Reenviar certificado</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded">Salir de Fast Training</button>
        </div>
    );
}

export default function Info() {
    return (
        <div className="my-12 bg-white p-6 rounded mt-48 w-11/12 h-11/12">
            <IconAlert />
            <Mensaje />
            <Botones />
        </div>
    );
}

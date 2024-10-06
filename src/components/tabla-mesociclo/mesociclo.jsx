function TablaMesociclo(){
    return(
    <section className="py-12 m-20 flex justify-center items-center rounded-lg bg-orange-100 w-9/12">
        <article className="bg-white h-full w-min rounded-2xl text-center">
            <table className="border-collapse border border-slate-500 w-full rounded-2xl  ">
                <thead className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border-solid border-black p-3 w-20 text-center border-collapse border">Test</th>
                        <th className="border-solid border-black p-3 w-20 text-center border-collapse border">I</th>
                        <th className="border-solid border-black p-3 w-20 text-center border-collapse border">II</th>
                        <th className="border-solid border-black p-3 w-20 text-center border-collapse border">III</th>
                        <th className="border-solid border-black p-3 w-20 text-center border-collapse border">IV</th>
                        <th className="border-solid border-black p-3 w-20 text-center border-collapse border">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-20 text-center ">Resistencia Aeróbica</th>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-20 text-center ">Velocidad</th>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-20 text-center ">Fuerza Explosiva</th>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-20 text-center ">Velocidad de Reacción</th>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-20 text-center ">Potencia</th>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-20 text-center ">Táctica</th>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-20 border-collapse border " contenteditable="true">Ingresa los datos</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </section>
    )
}

export default function Tabla(){
    return(
        <>
        <TablaMesociclo/>
        </>
    )
}
    
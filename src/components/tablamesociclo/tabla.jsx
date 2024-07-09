function Board() {
  return (
    <>
      <table className="border-collapse">
        <div className="flex flex-col">
          <th className="border-2 text-center p-2">
            Mesociclo de Entrenamiento
          </th>
          <div className="flex ">
            <th className="border-2 text-center p-2">Ciclos</th>
            <div className="flex flex-col">
              <td className="border-2 text-center p-2">Días</td>
              <td>
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
            </div>

            <div className="flex flex-col">
              <td className="border-2 text-center p-2">Semanas</td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
            </div>

            <div className="flex flex-col">
              <td className="border-2 text-center p-2">Meses</td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
              <td className="border-2 text-center p-2">
                <input type="text" />
              </td>
            </div>
          </div>
          <div className="flex ">
            <th className="border-2 text-center p-2">
              Direcciones de Entrenamiento
            </th>
            <div className="flex flex-col">
              <td className="border-2 text-center p-2">TECNICA INDIVIDUAL</td>
              <td className="border-2 text-center p-2">T. de la carrera</td>
              <td className="border-2 text-center p-2">Conducción</td>
              <td className="border-2 text-center p-2">Recepción</td>
              <td className="border-2 text-center p-2">Cabeceo</td>
              <td className="border-2 text-center p-2">Regate y finta</td>
              <td className="border-2 text-center p-2">Remate</td>
              <td className="border-2 text-center p-2">Tiro libre-penalti</td>
              <td className="border-2 text-center p-2">TENICA GRUPAL</td>
              <td className="border-2 text-center p-2">Pases</td>
              <td className="border-2 text-center p-2">TACTICA</td>
              <td className="border-2 text-center p-2">FUERZA</td>
              <td className="border-2 text-center p-2">Fuerza general</td>
              <td className="border-2 text-center p-2">Fuerza resistencia</td>
              <td className="border-2 text-center p-2">Propiocepción</td>
              <td className="border-2 text-center p-2">
                Fuerza pliometrica bajo impacto
              </td>
              <td className="border-2 text-center p-2">VELOCIDAD</td>
              <td className="border-2 text-center p-2">
                Velocidad de reacción
              </td>
              <td className="border-2 text-center p-2">
                Velocidad de desplazamiento{" "}
              </td>
              <td className="border-2 text-center p-2">Velocidad gestual</td>
              <td className="border-2 text-center p-2">Rapidez</td>
              <td className="border-2 text-center p-2">RESISTENCIA</td>
              <td className="border-2 text-center p-2">Cap.aerobica</td>
              <td className="border-2 text-center p-2">Coordinación</td>
              <td className="border-2 text-center p-2">Flexibilidad</td>
              <td className="border-2 text-center p-2">Partidos</td>
            </div>
          </div>
          <th className="border-2 text-center p-2">N° de sesiones</th>
          <th className="border-2 text-center p-2">N° de Horas a la semana</th>
        </div>
      </table>
    </>
  );
}

export default Board;

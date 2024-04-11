import { useState } from "react";
import { DatePickers } from "../DatePickers";
import { Button } from "../Button";
import { urlBase } from "../utils/url";
import { formatDate, formatDateFech } from "../utils/formatDate";

export default function Tables() {
  const [trunc, setTrunc] = useState();
  const [data, setData] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const arrayTrunc = ["day", "month", "year"];

  async function fecthData() {
    const response = await fetch(
      urlBase +
        `generacion/evolucion-renovable-no-renovable?start_date=${formatDateFech(
          start
        )}&end_date=${formatDateFech(end)}&time_trunc=${trunc}`
    );
    const data = await response.json();
    setData(data.included);
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-black my-5 text-5xl">
          Generación de Energía en España{" "}
        </h1>
        <select
          className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          onChange={(e) => setTrunc(e.target.value)}>
          {arrayTrunc &&
            arrayTrunc.map((time, i) => (
              <option value={time} key={i}>
                {time}
              </option>
            ))}
        </select>
        <div className="flex justify-center items-cente py-10">
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-extrabold">Fecha Inicio</h2>
            <DatePickers selectedDate={start} setSelectedDate={setStart} />
          </div>
          <div className="flex justify-center items-center flex-col">
            {" "}
            <h2 className="font-extrabold">Fecha Inicio</h2>
            <DatePickers selectedDate={end} setSelectedDate={setEnd} />
          </div>
        </div>
        <Button
          onClick={() => {
            fecthData();
          }}>
          {" "}
          Buscar{" "}
        </Button>
        <div className="flex justify-center items-center">
          {data ? (
            data.map((values, i) => {
              return (
                <div>
                  <div className=" overflow-x-auto mx-10 " key={i}>
                    <div className="flex justify-center">
                      <h2 className="font-extrabold">
                        {values.attributes.title}
                      </h2>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3"></th>
                          <th scope="col" className="px-6 py-3">
                            Fecha
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Valor
                          </th>
                          <th scope="col" className="px-6 py-3">
                            procentaje{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {values &&
                          values.attributes.values.map((val, i) => {
                            return (
                              <tr
                                className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={i}>
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                                <td className="px-6 py-4">
                                  {formatDate(val.datetime)}
                                </td>
                                <td className="px-6 py-4">
                                  {val.value.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                  {val.percentage.toFixed(2) + "%"}{" "}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="font-bold my-10">
              Por favor, selecciona los parámetros a mostrar
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://apidatos.ree.es/es/datos/generacion/evolucion-renovable-no-renovable?start_date=2021-01-01T00:00&end_date=2021-12-31T23:59&time_trunc=month"
//   );
//   const data = await res.json();
//   return { props: { data } };
// }

"use client";

import { lazy, useState } from "react";
import { DatePickers } from "../DatePickers";
import { Button } from "../Button";
import { urlBase } from "../utils/url";
import { formatDateFech } from "../utils/formatDate";
import { Chart } from "../Chart";
import useLoading from "../customHooks/useLoading";

const Tables = lazy(() => import("../Tables"), {
  ssr: false,
});

export const Dataviews = () => {
  const [trunc, setTrunc] = useState("day");
  const [data, setData] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [tab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useLoading();
  const arrayTrunc = ["day", "month", "year"];

  async function fetchData() {
    if (end && start) {
      const response = await fetch(
        urlBase +
          `generacion/evolucion-renovable-no-renovable?start_date=${formatDateFech(
            start
          )}&end_date=${formatDateFech(end)}&time_trunc=${trunc}`
      );
      const data = await response.json();
      setData(data.included);
    }
  }

  const handleButtonSearch = async () => {
    await setIsLoading(fetchData);
  };

  return (
    <>
      <div
        className="flex justify-center flex-col items-center"
        id="views-container">
        <h1 className="font-black my-5 text-5xl">
          Generación de Energía en España{" "}
        </h1>
        <select
          className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          onChange={(e) => setTrunc(e.target.value)}
          id="select-Data">
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
            <DatePickers
              selectedDate={start}
              setSelectedDate={setStart}
              id="datePickers-start"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            {" "}
            <h2 className="font-extrabold">Fecha Inicio</h2>
            <DatePickers
              selectedDate={end}
              setSelectedDate={setEnd}
              id="datePickers-End"
            />
          </div>
        </div>
        <Button
          disabled={!end || !start}
          id="button-search-data"
          onClick={() => {
            handleButtonSearch();
          }}>
          {" "}
          Buscar{" "}
        </Button>
        <div className="my-10">
          <Button
            id="button-table-data"
            className="mx-5"
            onClick={() => setTab(0)}>
            {" "}
            Tables
          </Button>
          <Button
            id="button-Chart-data"
            className="mx-5"
            onClick={() => setTab(1)}>
            {" "}
            Chart
          </Button>
        </div>
        {isLoading ? (
          <h2>Cargando...</h2>
        ) : (
          <div className="flex justify-center flex-column">
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                tab === 0 ? "opacity-100" : "opacity-0 "
              } flex flex-wrap justify-center flex-column`}>
              {data &&
                tab === 0 &&
                data.map((val) => {
                  return (
                    <Tables
                      data={val.attributes.values}
                      title={val.attributes.title}
                    />
                  );
                })}
            </div>
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                tab === 1 ? "opacity-100" : "opacity-0"
              }`}>
              {data && tab === 1 && <Chart data={data} />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

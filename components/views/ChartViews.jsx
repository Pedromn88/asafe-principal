import { useEffect, useState } from "react";
import { Button } from "../Button";
import { DatePickers } from "../DatePickers";
import { formatDate, formatDateFech } from "../utils/formatDate";
import ChartComponent from "../ChartComponent";

export default function Chart() {
  const [trunc, setTrunc] = useState("day");
  const [data, setData] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [label, setLabel] = useState([]);
  const [chart, setChart] = useState([]);
  const arrayTrunc = ["day", "month", "year"];

  async function fecthData() {
    const response = await fetch(
      `https://apidatos.ree.es/es/datos/generacion/evolucion-renovable-no-renovable?start_date=${formatDateFech(
        start
      )}&end_date=${formatDateFech(end)}&time_trunc=${trunc}`
    );
    const data = await response.json();
    setData(data.included);
  }
  const Arraychart = (data) => {
    {
      data &&
        data.map((values) => {
          values?.attributes?.values.map((val) => {
            setChart((prev) => [...prev, val.value]);
          });
        });
    }
  };

  const ArrayLabels = (data) => {
    {
      data &&
        data.map((values) => {
          values?.attributes?.values.map((val) => {
            setLabel((prev) => [...prev, formatDate(val.datetime)]);
          });
        });
    }
  };

  useEffect(() => {
    if (data) {
      Arraychart(data);
      ArrayLabels(data);
    }
  }, [data]);

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
        <div className="flex justify-center items-center">
          <div>
            <h2 className="font-extrabold">Fecha Inicio</h2>
            <DatePickers selectedDate={start} setSelectedDate={setStart} />
          </div>
          <div>
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
      </div>
      <div className="flex justify-center items-center  mx-10">
        {data &&
          data.map((values, i) => {
            return (
              <span key={i}>
                <ChartComponent
                  data={chart}
                  labels={label}
                  label={values.type}
                  type="line"
                />
              </span>
            );
          })}
      </div>
    </>
  );
}

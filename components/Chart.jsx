import { useEffect, useState } from "react";
import { formatDate } from "./utils/formatDate";
import ChartComponent from "./ChartComponent";

export const Chart = ({ data }) => {
  const [label, setLabel] = useState([]);
  const [chart, setChart] = useState([]);

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
      <div className="flex justify-center items-center my-10 mx-10 flex-wrap px-10">
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
};

import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({
  data,
  labels,
  label,
  type,
  backgroundColors,
  borderColors,
}) => {
  const canvasRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    chartInstance = new Chart(canvasRef.current, {
      type: type || "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        // Opciones del gráfico
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data, labels, label, type, backgroundColors, borderColors]);

  return (
    <div>
      <canvas ref={canvasRef} width="420px" height="300px" />
    </div>
  );
};

export default ChartComponent;

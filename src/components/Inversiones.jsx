import React, { useState, useEffect } from "react";
import { Card, LineChart, Title } from "@tremor/react";
import { useSpring, animated } from "react-spring";

const getRandomNumber = () => Math.random() * (3 - 1) + 1; // Ajusta según tus necesidades
const MAX_DATA_POINTS = 15;

const AnimatedLineChart = animated(LineChart);

const Chart = () => {
  const [chartData, setChartData] = useState([
    {
      year: 1970,
      "Export Growth Rate": getRandomNumber(),
      "Import Growth Rate": getRandomNumber(),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newDataPoint = {
          year: prevData[prevData.length - 1].year + 1,
          "Export Growth Rate": getRandomNumber(),
          "Import Growth Rate": getRandomNumber(),
        };

        // Mantener solo los últimos MAX_DATA_POINTS en el conjunto de datos
        return [...prevData.slice(-MAX_DATA_POINTS + 1), newDataPoint];
      });
    }, 1000); // Ajusta el intervalo según tus necesidades

    return () => clearInterval(interval);
  }, []);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const valueFormatter = (number) =>
    `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <animated.div style={props}>
      <Card>
        <Title>Export/Import Growth Rates (Last {MAX_DATA_POINTS} years)</Title>
        <AnimatedLineChart
          className="mt-6"
          data={chartData}
          index="year"
          categories={["Export Growth Rate", "Import Growth Rate"]}
          colors={["emerald", "gray"]}
          valueFormatter={valueFormatter}
          yAxisWidth={40}
        />
      </Card>
    </animated.div>
  );
};

export default Chart;


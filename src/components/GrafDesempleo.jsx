import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import chartData from "./Desempleo.json";

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = () => {
  const periodoData = chartData.map(({ date, Periodo }) => ({ date, Periodo }));
  const valorData = chartData.map(({ date, Valor }) => ({ date, Valor }));

  return (
    <div>
      {/* Gráfico para el Valor */}
      <Card className="mt-4">
        <Title>PRODUCTO INTERNO BRUTO</Title>
        <AreaChart
          className="h-72 mt-4"
          data={valorData}
          index="date"
          categories={["Valor"]}
          colors={["cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>

      {/* Gráfico para el Periodo (Meses) */}
      <Card className="mt-4">
        <Title>PRODUCTO INTERNO BRUTO - Meses</Title>
        <AreaChart
          className="h-72 mt-4"
          data={periodoData}
          index="date"
          categories={["Periodo"]}
          colors={["indigo"]}
        />
      </Card>
    </div>
  );
};

export default AreaChartComponent;
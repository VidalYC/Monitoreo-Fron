import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import chartData from "./PIB.json";
import deschartData from "./Desempleo.json";
import infchartData from "./Inflacion.json";

// Resto del código
const dataFormatter = (number) => {
  return "% " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = () => {
  // Filtra los datos para obtener los datos de fecha y precio por separado
  const precioData = chartData.map(({ date, Precio }) => ({ date, Precio }));

  const desfechaData = deschartData.map(({ date, Periodo }) => ({ date, Periodo }));
  const desprecioData = deschartData.map(({ date, Valor }) => ({ date, Valor }));

  const infprecioData = infchartData.map(({ date, Valor }) => ({ date, Valor }));

  return (
    <div>

      {/* Gráfico para el PIB */}
      <Card className="mt-4">
        <Title>PRODUCTO INTERNO BRUTO</Title>
        <AreaChart
          className="h-72 mt-4"
          data={precioData}
          showAnimation={true}
          index="date"
          categories={["Precio"]}
          colors={["cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>

      {/* Gráfico para Desempleo */}
      <Card className="mt-4">
        <Title>Tasa de Desempleo</Title>
        <AreaChart
          className="h-72 mt-4"
          data={desprecioData}
          showAnimation={true}
          index="date"
          categories={["Valor"]}
          colors={["green"]}
          valueFormatter={dataFormatter}
        />
      </Card>

      {/* Gráfico para Inflacion */}
      <Card className="mt-4">
        <Title>Inflacion</Title>
        <AreaChart
          className="h-72 mt-4"
          data={infprecioData}
          showAnimation={true}
          index="date"
          categories={["Valor"]}
          colors={["red"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    </div>
  );
};

export default AreaChartComponent;
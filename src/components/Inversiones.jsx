import React, { useState, useEffect } from "react";
import { Card, LineChart, Title, Button, NumberInput, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import { useSpring, animated } from "react-spring";
import { CurrencyDollarIcon } from "@heroicons/react/solid";

const getRandomNumber = () => Math.random() * (3 - 1) + 1; // Ajusta según tus necesidades
const MAX_DATA_POINTS = 15;

const AnimatedLineChart = animated(LineChart);

const showAlert1 = () => {
    alert("Invertiste en BTC con exito!!!");
  };

const showAlert2 = () => {
    alert("Invertiste en ACCIONES con exito!!!");
  };

const TabContent1 = () => (
  <>
    <h1>Invierte en BTC</h1>
    <NumberInput icon={CurrencyDollarIcon} placeholder="Monto" />
    <Button className="mt-2" onClick={() => showAlert1()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
    </Button>
  </>
);

const TabContent2 = () => (
  <>
    <h1>Invierte en Acciones</h1>
    <NumberInput icon={CurrencyDollarIcon} placeholder="Monto" />
    <Button className="mt-2" onClick={() => showAlert2()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
    </Button>
  </>
);

const Chart = () => {
  const [chartData, setChartData] = useState([
    {
      year: 1970,
      "Bitcoin": getRandomNumber(),
      "Bolsa": getRandomNumber(),
    },
  ]);

  const [showNumberInput, setShowNumberInput] = useState(false);
  const [invertState, setInvertState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newDataPoint = {
          year: prevData[prevData.length - 1].year + 1,
          "Bitcoin": getRandomNumber(),
          "Bolsa": getRandomNumber(),
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

  const handleInvest = () => {
    setShowNumberInput(!showNumberInput);
    setInvertState(!invertState);
  };

  const invertIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
    </svg>
  );

  const dollarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
    </svg>
  );

  return (
    <animated.div style={props} className="m-4"> {/* Agregamos margen al contenedor principal */}
      <Card className="mb-4"> {/* Agregamos margen inferior a la primera tarjeta */}
        <Title>BTC Y Bolsa de Valores</Title>
        <AnimatedLineChart
          className="mt-6"
          data={chartData}
          index="year"
          categories={["Bitcoin", "Bolsa"]}
          colors={["yellow", "emerald"]}
          valueFormatter={valueFormatter}
          yAxisWidth={40}
        />
      </Card>
      <Card>
        <h1>AQUI PUEDES INVERTIR!!!</h1>
        <Button className="mt-4" onClick={handleInvest}>
          {invertState ? invertIcon : dollarIcon}
          {invertState ? "" : ""}
        </Button>
        {showNumberInput && (
          <div className="mt-4">
            <h1>Puedes Elegir</h1>
            <TabGroup>
              <TabList>
                <Tab>Bitcoin</Tab>
                <Tab>Acciones</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TabContent1 />
                </TabPanel>
                <TabPanel>
                  <TabContent2 />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        )}
      </Card>
    </animated.div>
  );
};

export default Chart;

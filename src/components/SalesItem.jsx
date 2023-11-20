import React, { useState } from "react";

import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    "fecha": "11\/17\/2023",
    "valor": 4092
   },
  {
    "fecha": "10\/31\/2023",
    "valor": 4118
   },
  {
    "fecha": "09\/29\/2023",
    "valor": 4078.5
   },
  {
    "fecha": "08\/31\/2023",
    "valor": 4088.1
   },
  {
    "fecha": "07\/31\/2023",
    "valor": 3930
   },
  {
    "fecha": "06\/30\/2023",
    "valor": 4175
   },
  {
    "fecha": "05\/31\/2023",
    "valor": 4445.05
   },
  {
    "fecha": "04\/28\/2023",
    "valor": 4696.43
   },
  {
    "fecha": "03\/31\/2023",
    "valor": 4654.55
   },
  {
    "fecha": "02\/28\/2023",
    "valor": 4856.85
   },
  {
    "fecha": "01\/31\/2023",
    "valor": 4665.05
   },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>CriptoMoneda</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>BTC</Tab>
            <Tab icon={ViewListIcon}>LIST</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Divider />
      <Text className="mt-8">
        <Bold>Precio Mensual Ultimo Año</Bold>
      </Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={true}
          category="valor"
          index="fecha"
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Fecha</Bold>
            </Text>
            <Text>Precio</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.fecha}>
                <Text>{stock.fecha}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    $ {Intl.NumberFormat("us").format(stock.valor).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 pt-4 border-t">
  
      </Flex>
    </Card>
  );
};

export default SalesItem;

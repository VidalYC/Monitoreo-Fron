import React from "react";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

const data = [
  
  {
    name: "EUR",
    value: 4433.23,
    href: "https://www.google.com/finance/quote/EUR-COP?sa=X&ved=2ahUKEwi2ydWln9OCAxUVSzABHf0HAqwQmY0JegQIBhAr",
    icon: function GitHubIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-yellow-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z" clip-rule="evenodd" />
        </svg>
      );
    },
  },
  {
    name: "USD",
    value: 4049.93,
    href: "https://www.google.com/finance/quote/USD-COP?sa=X&ved=2ahUKEwiBnNK4n9OCAxU4RjABHbBfBQQQmY0JegQIChAr",
    icon: function RedditIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-green-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
        </svg>
      );
    },
  },
  {
    name: "GBP",
    value: 5065.27,
    href: "https://www.google.com/finance/quote/GBP-COP?sa=X&ved=2ahUKEwiNgoKsotOCAxUisoQIHcyxCdgQmY0JegQIERAr",
    icon: function GitHubIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-blue-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.763 9.51a2.25 2.25 0 013.828-1.351.75.75 0 001.06-1.06 3.75 3.75 0 00-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 000 1.5h.421l.138.964a3.75 3.75 0 01-.358 2.208l-.122.242a.75.75 0 00.908 1.047l1.539-.512a1.5 1.5 0 01.948 0l.655.218a3 3 0 002.29-.163l.666-.333a.75.75 0 10-.67-1.342l-.667.333a1.5 1.5 0 01-1.145.082l-.654-.218a3 3 0 00-1.898 0l-.06.02a5.25 5.25 0 00.053-1.794l-.108-.752H12a.75.75 0 000-1.5H9.972l-.184-1.29a1.863 1.863 0 01-.025-.45z" clip-rule="evenodd" />
        </svg>
      );
    },
  },
  {
    name: "JPY",
    value: 27.28,
    href: "https://www.google.com/finance/quote/JPY-COP?sa=X&ved=2ahUKEwiHse-jotOCAxVBSTABHSp1AB0QmY0JegQIChAr",
    icon: function GitHubIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-violet-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.624 7.084a.75.75 0 00-1.248.832l2.223 3.334H9a.75.75 0 000 1.5h2.25v1.5H9a.75.75 0 000 1.5h2.25v1.5a.75.75 0 001.5 0v-1.5H15a.75.75 0 000-1.5h-2.25v-1.5H15a.75.75 0 000-1.5h-1.599l2.223-3.334a.75.75 0 10-1.248-.832L12 10.648 9.624 7.084z" clip-rule="evenodd" />
        </svg>
      );
    },
  },
  
];

const WebAnalytics = () => {
  return (
    <Card className="max-w-full my-4">
      <Title>Monedas</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>Nombre</Bold>
        </Text>
        <Text>
          <Bold>Precio</Bold>
        </Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  );
};

export default WebAnalytics;

import { useState } from "react";
import "./App.css";
import { Button, Card, Container, List, MantineProvider, Text, Title, Image, Center } from "@mantine/core";
import { Carousel } from "@mantine/carousel";


function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Title order={1}color="#1864AB" >
Das ich 
          </Title>
          <Center>
          <Image mb={50} src="/girlsday-portfolio-valentina/GirlsDay-13.jpg" maw={300}/>
          </Center>
        <Button component="a" href="https://www.instagram.com/valentina18.0909/" target="_blank" variant="light" color="indigo" size="xl" uppercase>
          <Text color="#1864AB"> 
            valle die qualle
            </Text>
        </Button>
        <Text mt="md" c="dark" size={30}>
          valentina18.0909
        </Text>
        <Title order={1}>

</Title>
<Text mt="md"mb={30} c="dark"size={20}>
i love and hate my life at the same time
</Text>
<Carousel  loop mb={25} c="dark" size={20}>
          <Carousel.Slide>Hobbys</Carousel.Slide>
          <Carousel.Slide>Hip Hop</Carousel.Slide>
          <Carousel.Slide>Tennis</Carousel.Slide>
          <Carousel.Slide>Klavier</Carousel.Slide>
          <Carousel.Slide>Freunde treffen</Carousel.Slide>
          <Carousel.Slide>Familie treffen</Carousel.Slide>
          <Carousel.Slide>Feiern zu gehen</Carousel.Slide>
        </Carousel>
        <Text mt="md"mb={30} size={20} c="dark">
ich bin geboren um meine jugend zu leben 
</Text>
      </Container>
    </MantineProvider>
  );
}

export default App;

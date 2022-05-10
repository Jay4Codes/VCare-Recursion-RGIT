import React from "react";
import IndividExe from "./IndividualExe";
import { HStack, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Exerciselist = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Container style={{ marginLeft: 300, marginTop: 130 }}>
        <HStack p="20px" w="1000px" spacing={120} style={{ marginBottom: 50 }}>
          <IndividExe
            exername="Tadasana"
            desc="Skipping is important for any cricketer"
            imgURL="http://localhost:3000/assets/skipping.gif"
            className="cards-exercise"
          />

          <IndividExe
            exername="Squats"
            desc="Squats are important for any athlete"
            imgURL="http://localhost:3000/assets/exe1.gif"
            className="cards-exercise"
            route="e2"
          />
        </HStack>
        <HStack p="20px" w="1000px" spacing={120} mt="90px">
          <IndividExe
            exername="Push Ups"
            desc="PushUps are important for any cricketer"
            imgURL="http://localhost:3000/assets/pushups.gif"
            className="cards-exercise"
            route="e3"
          />
          <IndividExe
            exername="Running"
            desc="Running is important for any athlete"
            imgURL="http://localhost:3000/assets/replace.gif"
            className="cards-exercise"
            route="e4"
          />
        </HStack>
      </Container>
      <Footer />
    </div>
  );
};

export default Exerciselist;

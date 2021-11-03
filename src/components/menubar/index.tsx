import React from "react";
import { Container, Wrapper, Text, LeftText } from "./styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Menubar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper>
          <MenuOutlinedIcon />
          <Text>All</Text>
        </Wrapper>
        <Wrapper>
          <Text>Today's Deals</Text>
          <Text>Customer Service</Text>
          <Text>Gift Cards</Text>
          <Text>Sell</Text>
          <Text>Registry</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <LeftText>Amazon's response to COVID-19</LeftText>
      </Wrapper>
    </Container>
  );
};

export default Menubar;

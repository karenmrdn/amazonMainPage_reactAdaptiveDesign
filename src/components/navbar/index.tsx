import React from "react";
import {
  Container,
  Logo,
  Flag,
  Text,
  Wrapper,
  Searchbox,
  Select,
  SearchIconWrapper,
} from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo src={logo} />
        <Wrapper flexDirection="row" alignItems="center">
          <RoomOutlinedIcon />
          <Wrapper>
            <Text fontSize="0.7em">Deliver In</Text>
            <Text>Ukraine</Text>
          </Wrapper>
        </Wrapper>

        {/* Search btn */}
        <Select>
          <option value="All">All</option>
        </Select>
        <Searchbox />
        <SearchIconWrapper>
          <SearchOutlinedIcon />
        </SearchIconWrapper>

        {/* Flag image */}
        <Wrapper flexDirection="row" alignItems="flex-start">
          <Flag src={flag} />
          <ArrowDropDownOutlinedIcon />
        </Wrapper>

        <Wrapper>
          <Text fontSize="0.7em">Hello, Sign In</Text>
          <Wrapper flexDirection="row" alignItems="center">
            <Text>Account & Lists</Text>
            <ArrowDropDownOutlinedIcon />
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <Text fontSize="0.7em">Returns</Text>
          <Text>& Orders</Text>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="center">
          <Wrapper alignItems="center">
            <Text color="#f90">0</Text>
            <ShoppingCartOutlinedIcon />
          </Wrapper>

          <Text>Cart</Text>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;

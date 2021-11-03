import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  Wrapper,
  Image,
  Text,
  Paragraph,
  ProductContainer,
  ImageContainer,
  SearchResultDiv,
  IconWrapper,
  BoldText,
} from "./styles";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { departmentList, productDetails } from "./pageInfo";

const PageBody: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <BoldText>Department</BoldText>
        {departmentList.map((item) => (
          <Paragraph key={item}>
            <KeyboardArrowLeftOutlinedIcon />
            {item}
          </Paragraph>
        ))}
      </LeftContainer>
      <RightContainer>
        <SearchResultDiv>
          <BoldText>1-12 of over 2,000 results for</BoldText>
          <BoldText color="#c45500"> All Departments</BoldText>
        </SearchResultDiv>
        <ProductContainer>
          {productDetails.map((item) => (
            <Wrapper key={item.id} flexDirection="column">
              <ImageContainer>
                <Image src={item.src} />
              </ImageContainer>
              <Text>{item.name}</Text>
              <Text fontSize="0.8em" color="grey">
                {item.by}
              </Text>

              {/* Stars */}
              <Wrapper margin="0.3em 0 0 0" alignItems="center">
                <IconWrapper>
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarHalfOutlinedIcon />
                  <StarBorderOutlinedIcon />
                </IconWrapper>
                <KeyboardArrowDownOutlinedIcon />
                <Text color="blue">{item.starCount}</Text>
              </Wrapper>

              <Wrapper alignItems="center" margin="0.3em 0">
                <Text fontSize="1.3em">{item.price}</Text>
                <Text color="grey">{item.shipping}</Text>
              </Wrapper>
              <Text>{item.available}</Text>
            </Wrapper>
          ))}
        </ProductContainer>
      </RightContainer>
    </Container>
  );
};

export default PageBody;

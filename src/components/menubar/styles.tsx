import styled from "styled-components";
import { PageText as MenuText } from "../helpers/PageText";
import { PageItemWrapper as MenuItemWrapper } from "../helpers/ItemWrapper";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0.3em;
  background-color: #232f3e;
`;

export const Text = styled(MenuText)`
  color: ${(props) => props?.color ?? "#fff"};
  font-size: ${(props) => props?.fontSize ?? "0.9em"};
  margin-right: 1em;
  border: 1px solid #232f3e;
  padding: 0.5em 0.1em;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LeftText = styled(Text)`
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Wrapper = styled(MenuItemWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
`;

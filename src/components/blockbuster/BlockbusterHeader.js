import React from "react";
import { Header, Heading, SeeMoreContainer, SeeMore } from "./styles";

const BlockbusterHeader = ({ headerData }) => {
  return (
    <Header>
      <Heading>{headerData.title}</Heading>
      <SeeMoreContainer>
        <SeeMore type="button" value="see more" />
      </SeeMoreContainer>
    </Header>
  );
};

export default BlockbusterHeader;

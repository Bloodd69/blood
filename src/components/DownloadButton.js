import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function DownloadButton() {
  return (
    <Wrapper>
      <Circle />
      <Title></Title>
    </Wrapper>
  );
}

export default DownloadButton;

const Wrapper = styled.div``;

const Circle = styled.div``;

const Title = styled(TextStyles.BodyMain)``;
